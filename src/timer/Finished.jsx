import React from 'react'
import Confetti from 'react-confetti'
import styled from 'styled-components';

const Finished = ({setIsPaused, setTimeLeft}) => {
  let width = window.innerWidth;

  const CongratsText = styled.p`
  margin: 20px;
  color: #f9d65b;
  text-shadow: 3px 2px black;
  font-size: 50px;
`
const ButtonStyling = styled.button`
  color: #f9d65b;
  background-color: #000000;
  font-size: 40px;
  border-color: #f9d65b;
  margin-bottom: 20px;
`

  return (
    <div align="center">
      <Confetti width={width} numberOfPieces={2000}/>
      <CongratsText>
        You did it! <br/>
        You're now officially PomoDone. Congrats!!<br/>
        Stretch your legs, and start over! 
      </CongratsText>
      <div align="center">
      <ButtonStyling onClick={()=>{
        setTimeLeft(0);
        setIsPaused(true);
      }}>Start Another Session!</ButtonStyling>
    </div>
    </div>
  )
}

export default Finished