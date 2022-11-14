/*
todo use this space to build teh components xtina is talking about.
*todo: use Es7 snippet to make block //^the command is rafce
*/


import React, {useEffect, useRef} from 'react'
import { Block } from './Block'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

const NumberText = styled.h1`
  color: #f9d65b;
  text-shadow: 3px 2px black;
  font-size: 40px;
`
const ButtonStyling = styled.button`
  color: #f9d65b;
  background-color: #000000;
  font-size: 40px;
  border-color: #f9d65b;
  margin-bottom: 20px;
`

const Timer = ({timeLeft, setTimeLeft, isPaused, setIsPaused}) => {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      isPaused?
        clearInterval(intervalRef.current):
        setTimeLeft(timeLeft-1)
      
    }, 1000)
    intervalRef.current = id;
    return () => clearInterval(intervalRef.current)
  });


  let minutes = Math.floor(timeLeft/60);
  let seconds = Math.floor(timeLeft-60*minutes);

  return (
    <>
    <Container>
      <Block  param="minutes" number={minutes}/><NumberText>:</NumberText ><Block param="seconds" number={seconds}/>
    </Container>
    <div align="center">
      <ButtonStyling onClick={()=>{
        setTimeLeft(0);
        setIsPaused(true);
      }}>Set to Zero</ButtonStyling>
    </div>
    </>
  )
}

export default Timer
