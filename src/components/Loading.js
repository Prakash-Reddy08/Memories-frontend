import React from 'react'
import styled from 'styled-components';

const Loading = () => {
    return (
        <Wrapper>
            <div>
                Loading...
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export default Loading
