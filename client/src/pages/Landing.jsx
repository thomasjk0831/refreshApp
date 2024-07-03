import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
    font-size:1.5rem;
    background: ${props => props.bg === "red"? "red": "blue"};
`

const Landing = () => {
  return (
    <div>
      <h1>
      Landing
        </h1>
        <StyledBtn bg="red">button</StyledBtn>
    </div>
  )
}

export default Landing