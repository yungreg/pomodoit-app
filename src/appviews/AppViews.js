/*
*todo: import honeyraes app views
*todo: refactor  the route to include mysessions list
*todo: refactor to send to timer page upon succesful login
*todo: create and pass in the timer //^ so.. timer was just interpolated directly here after being imported from theNPM library. doesn't seem elegant.. but it does work predictably!
*/
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { UserSessionsList } from "../sessions/UserSessionsList"
import { TaskForm } from "../taskform/TaskForm"
import { EditSessionsForm } from "../sessions/SessionEditor"
import { Route, Routes, Outlet } from "react-router-dom"
import Timer from "react-compound-timer/build"


export const AppViews = () => {
	return (
    <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <h1>Welcome to PomoDoIt!</h1>
                <h2>✨PomoDoIt until it’s PomoDone!✨</h2>
              </div>
  
              <Outlet />
              
            </>
          } 
        >
        <Route path="/login" element={<><Login /></>} /> 
		    <Route path="/" element={<><Login /></>} />
        <Route path="mySessions" element={ <UserSessionsList/> } />

		    {/* teh code below is very weird but works..? there has to be a better solution than this. */}
        <Route path="/timer" element={<><Timer initialTime={1500000} startImmediately={false}
        direction={"backward"}
      
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
    </Timer><TaskForm /></>} />
		    <Route path="/mySessions" element={<><UserSessionsList/> </>} />
		    <Route path="/mySessions/:id" element={<EditSessionsForm />} />
        </Route>
      </Routes>)
}
