/*
todo: import the register component 
todo: refactor the rendering function
*/
import { Register } from "./auth/Register";
import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import logo from './logo.svg';
import './App.css';
import { NavBar } from "./navbar/NavBar";
import { UserSessionsList } from "./sessions/UserSessionsList";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mySessions" element={<UserSessionsList/> } />
      <Route path="*" element={
        <>
        <NavBar />
        
        </>
      }/>
</Routes>
  );
}

export default App; 
