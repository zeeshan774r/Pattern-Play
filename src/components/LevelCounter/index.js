import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: block;
`
const Text = styled.span`
    color: #000;
    font-size: 1.5rem;
`
const Value = styled.span`
    color: #000;
    opacity: 0.7;
    font-size: 1.5rem;
`

function LevelCounter(props){
    return(
        <Wrapper>
            <Text>Level: </Text>
            <Value>{props.level}</Value>
        </Wrapper>
    )
}

export default LevelCounter