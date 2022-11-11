import React from 'react'
import styled from 'styled-components'

const NumberText = styled.h1`
  color: #f9d65b;
  text-shadow: 3px 2px black;
  font-size: 40px;
`

export const Block = ({param, number}) => {
  return (
    <div align="center">
      <NumberText >{number}</NumberText>
      <NumberText>{param}</NumberText>
    </div>
  )
}
