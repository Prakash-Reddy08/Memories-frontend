import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../context/UserContext'

const Logout = () => {
    const { authUser, setIsLoading } = useAuthContext()
    const logoutUserr = () => {
        setIsLoading(true);
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/logout`, { withCredentials: true }).then(
            () => {
                authUser(false);
                setIsLoading(false);
            }
        )
    }
    return (
        <Wrapper>
            <button onClick={logoutUserr}>
                Logout
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    button{
        background-color: #1B1212;
        border:1px solid #1B1212;
        outline: none;
        border-radius: 3px;
        padding:0.5rem;
        color:#fff;
        cursor: pointer;
    }
    button:hover{
        background-color: #FFFFF0;
        border:1px solid #1B1212;
        color:black;
    }
`

export default Logout
