import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
   padding: 0.25rem 2.5rem;
   cursor: pointer;
`
const Text = styled.span`
    color: #000;
    font-size: 1rem;
`

function Button(props){
    return(
        <Wrapper onClick={props.onClick}>
            <Text>Play</Text>
        </Wrapper>
    )
}

export default Button