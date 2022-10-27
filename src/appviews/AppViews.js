/*
*todo: import honeyraes app views
todo: refactor  the route to include mysessions list
todo: refactor to send to timer page upon succesful login
*/

import { UserSessionsList } from "../sessions/UserSessionsList"
import { Route, Routes, Outlet } from "react-router-dom"


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
        
        <Route path="mySessions" element={ <UserSessionsList/> } />
        </Route>
      </Routes>)
}
