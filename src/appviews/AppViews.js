/*
*todo: import honeyraes app views
*todo: refactor  the route to include mysessions list
*todo: refactor to send to timer page upon succesful login
*todo: create and pass in the timer //^ so.. timer was just interpolated directly here after being imported from theNPM library. doesn't seem elegant.. but it does work predictably!
*/
import { Login } from "../auth/Login"

import { UserSessionsList } from "../sessions/UserSessionsList"
import { TaskForm } from "../taskform/TaskForm"
import { EditSessionsForm } from "../sessions/SessionEditor"
import { Route, Routes, Outlet } from "react-router-dom"
import Timer from "react-compound-timer/build"
import "./AppViews.css"

export const AppViews = () => {
	return (
    <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container--sitewide_welcome">
                <h1 className="sitewide_header">Welcome to PomoDoIt!</h1>
                <h2 className="sitewide_subheader">✨PomoDoIt until it’s PomoDone!✨</h2>
              </div>
  
              <Outlet />
              
            </>
          } 
        >
        <Route path="/login" element={<><Login /></>} /> 
		    <Route path="/" element={<><Login /></>} />
        <Route path="mySessions" element={ <UserSessionsList/> } />

		    {/* the code below is very weird but works..? there has to be a better solution than this. */}
        
        <Route path="/timer" element={
        <>
          <Timer 
          initialTime={1500000} 
          startImmediately={false}
          direction={"backward"}>
            {({ start, pause, reset }) => (
              <div className='timer_section'>
                  <div className='timer_countdown'>
                    <h4 className='timer_readout' >Session time remaining:</h4>
                      {/* how do I style these next two hooks? */}
                      <Timer.Minutes /> minutes <br/>
                      <Timer.Seconds /> seconds
                  </div>
                  <div className='timer_countdown'>
                      <button className="button_Timer" onClick={start}>Start or Resume timer!</button>
                      <button className="button_Timer" onClick={pause}>Pause Timer!</button>
                      <button className="button_Timer" onClick={reset}>Reset Timer!</button>
                  </div>
              </div>
              )}
          </Timer>

          <TaskForm />
        </>} />

		    <Route path="/mySessions" element={<><UserSessionsList/> </>} />
		    <Route path="/mySessions/:id" element={<EditSessionsForm />} />
        </Route>
      </Routes>)
}
