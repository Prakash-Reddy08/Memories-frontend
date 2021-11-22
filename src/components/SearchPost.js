import React from 'react'
import styled from 'styled-components'

const SearchPost = () => {
    return (
        <Wrapper>
            <input type="text" placeholder="Search Memories" />
            <input type="text" placeholder="Search Tags" />
            <button>SEARCH</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 8px -1px rgba(77,75,75,0.55);
    border-radius: 4px;
    min-height: 181px;
    max-height: 181px;
    input{
        width: 90%;
        height: 2.4rem;
        padding: 4px;
        outline:none
    }
    button{
        width: 94%;
        height: 2.4rem;
        padding: 4px;
        outline: none;
        border:1px solid #1B1212;
        background-color: #1B1212;
        border-radius: 5px;
        color:white;
        :hover{
            background-color: #fffff0;
            color: #1B1212;
        }
        cursor: pointer;
    }
`

export default SearchPost
