/*
*todo: find an NPM countdown timer you can understand
*todo: import that syuntax
*todo: refactor for your needs (keep it basic.....please. lol)
*todo: figure out install error (worked with a legacy install)
todo: figure out what "mounting" means...?
todo:
*/
import React from 'react'

import Timer from "react-compound-timer/build"



export const CountdownTimer = () => {
     <Timer initialTime={1500000} startImmediately={false}
    
>
    {({ start, pause, reset }) => (
        <>
            <div className='timer_countdown'>
            	<h4>Session time remaining:</h4>
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
            </div>
            <div className='timer_countdown'>
                <button onClick={start}>Start or Resume timer!</button>
                <button onClick={pause}>Pause Timer!</button>
                <button onClick={reset}>Reset Timer!</button>
            </div>
        </>
    )}
</Timer>
}