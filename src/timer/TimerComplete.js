/*
!remember: yuour TimerComplete = Xtina's App.js
*todo: make ternanry that shows finished OR timer blocks
*/

import React, { useState } from "react";
import Timer from "../timer/Timer";
import Finished from "../timer/Finished";
import TimeForm from "./Form";

const TimerComplete = () => {
    const [timeLeft, setTimeLeft] = useState(0)
    const [isPaused, setPaused] = useState(true) 
  
    return (
        <>
        <TimeForm setTimeLeft={setTimeLeft}/>
        {timeLeft<0? 
            <Finished setTimeLeft={setTimeLeft} setPaused={setPaused} />:
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setPaused={setPaused} isPaused={isPaused} /> 
        }
        </>
  );
};

export default TimerComplete;
