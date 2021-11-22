import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Logout from './Logout';

const Navbar = ({ userData }) => {
    return (
        <Wrapper>
            <nav>
                <div className='logo'>
                    <Link className='logo-name' to='/'>
                        <h1>MEMORIES</h1>
                    </Link>
                </div>

                <div className="user-info">
                    <div className="user-avatar">
                        <img src={userData.avatar} alt={userData.fullName} />
                    </div>
                    <div className='user-name'>{userData.fullName}</div>
                    <div className='logout-button'>
                        <Logout />
                    </div>
                </div>
            </nav>

        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
    nav{
        display: flex;
        flex-direction: row;
        /* border:1px solid black; */
        box-shadow: 0px 4px 8px -1px rgba(77,75,75,0.75);
        flex-wrap: wrap;
        background-color: #ffffff;
        width: 90%;
        border-radius: 10px;
        padding: 0 2.5rem;
        margin-top: 2rem;
        height: 5rem;
        align-items: center;
        justify-content: space-between;
    }
    .logo > .logo-name{
        text-decoration: none;
        color: #1B1212
    }
    .user-info{
        display: flex;
        align-items: center;
    }
    .logout-button{
        margin-left: 60px;
    }
    .user-name{
        display: flex;
        align-items: center;
    }
    .user-avatar{
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
    .user-avatar > img{
        width: 40px;
        border-radius: 50%;
    }
    @media (max-width:520px){
        nav{
            flex-direction: column;
        }
    }
`

export default Navbar
