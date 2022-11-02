/*
*todo: import honeyraes app views
*todo: refactor  the route to include mysessions list
*todo: refactor to send to timer page upon succesful login
todo: create and pass in the timer
*/
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { UserSessionsList } from "../sessions/UserSessionsList"
import { TaskForm } from "../taskform/TaskForm"
import { EditSessionsForm } from "../sessions/SessionEditor"
import { Route, Routes, Outlet } from "react-router-dom"
import { CountdownTimer } from "../timer/Timer"


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
        {/* timer route goes here when comepleted */}
        <Route path="/login" element={<><Login /></>} /> 
		    <Route path="/" element={<><Login /></>} />
        <Route path="mySessions" element={ <UserSessionsList/> } />
        <Route path="/register" element={<Register />} />
		    <Route path="/timer" element={<><CountdownTimer /><TaskForm /></>} />
		    <Route path="/mySessions" element={<><UserSessionsList/> </>} />
		    <Route path="/mySessions/:id" element={<EditSessionsForm />} />
        </Route>
      </Routes>)
}
