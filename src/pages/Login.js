import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useAuthContext } from '../context/UserContext';
import Loading from '../components/Loading';

const Login = () => {
    const { authUser, authUserData, setIsLoading, isLoading } = useAuthContext()

    const [isDisabled, setIsDisabled] = useState(false);

    const UserAuthenticated = async () => {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true })
            .catch((err) => console.log('not authenticated'))
        if (response?.data) {
            setIsLoading(false)
            authUser(true);
            authUserData(response.data);
        }
        else {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        UserAuthenticated();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const redirectToGoogleAuth = () => {
        setIsDisabled(true);
        let timer;
        const googleLoginURL = 'http://localhost:5000/api/auth/google';
        const newWindow = window.open(googleLoginURL, "_blank", "width=500,height=600");
        if (newWindow) {
            timer = setInterval(async () => {
                if (newWindow.closed) {
                    UserAuthenticated();
                    setIsDisabled(false);
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Wrapper>
            {/* <button onClick={redirectToGoogleAuth} disabled={isDisabled} > */}
            <button className="OAuth" onClick={redirectToGoogleAuth} disabled={isDisabled}>
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="googleLogin"
                        />
                    </div>
                    <p className="btn-text">Login with google</p>
                </div>
            </button>
            {/* </button> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
 display: flex;
 width: 100vw;
 height: 100vh;
 justify-content: center;
 align-items: center;

 button{
     outline: none;
     border:none;
     cursor: pointer;
 }

.google-btn{
  display: flex;
  flex-direction: row;
  height: 42px;
  background-color: #1B1212;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 1px;
  /* margin-bottom: 1.1rem; */
}


.google-icon-wrapper{
  width: 40px;
  height: 42px;
  border-radius: 1px;
  background-color: #e0e3e5;
  filter: brightness(90%);
}
.google-icon {
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
}
.btn-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 245px;
  color: #e0e3e5;
  font-size: 16px;
  letter-spacing: 0.2px;
  font-family: "Roboto";
}
`

export default Login
