/*
*todo: find an NPM countdown timer you can understand
*todo: import that syuntax
*todo: refactor for your needs (keep it basic.....please. lol)
*todo: figure out install error (worked with a legacy install)
*todo: figure out what "mounting" means...?
^ styling todo below:
?pregunta: can i put the minutes and seconds in a div and then style that div? i wonder because of the react hook
*/
import React from 'react'

import Timer from "react-compound-timer/build"

import "./Timer.css"

export const CountdownTimer = () => {
     <Timer initialTime={1500000} startImmediately={false}
    
>
    {({ start, pause, reset }) => (
        <div className='timer-display'>
            <div className='timer_countdown'>
            	<h4 className='timer_countdown_text'>Session time remaining:</h4>
                <div className='timer_countdown_numbers'>
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                </div>
            </div>
            <div className='timer_all_buttons'>
                <button className='timer_start' onClick={start}>Start or Resume timer!</button>
                <button className='timer_pause' onClick={pause}>Pause Timer!</button>
                <button className='timer_reset' onClick={reset}>Reset Timer!</button>
            </div>
        </div>
    )}
</Timer>
}