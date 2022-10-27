/*
*todo: import the register component 
*todo: refactor the rendering function
*todo: import AuthorizATION 
*todo: import NavBaR/ PASS IT IN AS PROP
*/
import { Outlet } from "react-router-dom";
import { Register } from "./auth/Register";
import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import logo from './logo.svg';
import './App.css';
import { NavBar } from "./navbar/NavBar";
import { UserSessionsList } from "./sessions/UserSessionsList";
import { TaskForm } from "./taskform/TaskForm";
import { AppViews } from "./appviews/AppViews";
import { Authorized } from "./auth/Authorized";

export const Pomodoit = () => {
	return <Routes>
    {/* routed this way so the Navbar toggles the logout option depending on the login status. */}
		<Route path="/login" element={<><NavBar/><Login /></>} /> 
		<Route path="/" element={<><NavBar/><Login /></>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			
      <Authorized>
				<>
          <NavBar />
				  <AppViews />
				</>
			</Authorized>

		} />
	</Routes>
};


{/* <Route path="/navbar" element={<NavBar/>} /> */}


// <Routes>
     
// <Route index path="/" element={<Login />} />
// <Route path="/register" element={<Register />} />
// <Route path="/mySessions" element={<UserSessionsList/> } />
// <Route path="/timer" element={<TaskForm /> } />
// 


// </Routes>