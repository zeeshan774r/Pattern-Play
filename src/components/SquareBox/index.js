import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid #000;
    width: 6rem;
    height: 6rem;
    opacity: ${({highlighted}) => highlighted? '1':'0.5'};
    cursor: pointer;
    margin: 0 1rem;
    background-color : ${({color}) => color};
    box-shadow : ${({highlighted}) => highlighted? '0 0 20px gold':'none'};
`

function SquareBox(props){
    return(
        <Wrapper color={props.color} highlighted={props.highlighted} onClick={props.onClick} />
    )
}

export default SquareBox