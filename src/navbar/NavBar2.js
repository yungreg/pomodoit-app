/*
*todo: grab the component from Honey Rae's
todo: refactor component for PomodoIT links
todo: import navbar css
*/

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar2 = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
            
                <Link className="navbar__link" to="/login">Log In</Link>
                <Link className="navbar__link" to="/login"> Timer (logo image here)
                </Link>
                <Link className="navbar__link" to="/register">Register!</Link>

               
            </li>
            {
                localStorage.getItem("pomo_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("pomo_user")
                            navigate("/register",)
                        }}>Register</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
