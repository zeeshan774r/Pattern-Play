import React from 'react'
import PatternPlay from '../src/pages/main'
import styled from 'styled-components'

const Title = styled.h1`
  color: #000;
  text-align: center;
`

function App() {
  return (
    <div className="App">
      <Title>Pttaern Repeating Game</Title>
      <PatternPlay></PatternPlay>
    </div>
  );
}

export default App;
