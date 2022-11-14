/*
!remember: yuour TimerComplete = Xtina's App.js
*todo: make ternanry that shows finished OR timer blocks
*/

import React, { useState } from "react";
import Timer from "../timer/Timer";
import Finished from "../timer/Finished";
import TimeForm from "./Form";

import "./TimerComplete.css"

const TimerComplete = () => {
    const [timeLeft, setTimeLeft] = useState(0)
    const [isPaused, setIsPaused] = useState(true) 
  
    return (
        <div className="TimerComplete_div">
        <TimeForm setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
        {timeLeft<0? 
            <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} />:
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} isPaused={isPaused} /> 
        }
        </div>
  );
};

export default TimerComplete;
