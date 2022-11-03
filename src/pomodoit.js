/*
*todo: import the register component 
*todo: refactor the rendering function
*todo: import AuthorizATION 
*todo: import NavBaR/ PASS IT IN AS PROP
todo: add logout route which sends you back to login
todo: 
*/

import { Register } from "./auth/Register";
import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"

import './App.css';
import { NavBar1 } from "./navbar/NavBar1";
import { AppViews } from "./appviews/AppViews";
import { Authorized } from "./auth/Authorized";

export const Pomodoit = () => {
	return <Routes>
    {/* routed this way so the Navbar toggles the logout option depending on the login status. */}
		
		<Route path="/login" element={<><NavBar1/><Login /></>} /> 
		<Route path="/" element={<><NavBar1/><Login /></>} />
		<Route path="/register" element={<><NavBar1/><Register /></>} />

		<Route path="*" element={
			
      <Authorized>
				<>
          		<NavBar1 />
				<AppViews />				
				</>
			</Authorized>

		} />
	</Routes>
};

