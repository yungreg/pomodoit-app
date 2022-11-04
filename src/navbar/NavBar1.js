/*
*todo: grab the component from Honey Rae's
*todo: refactor component for PomodoIT links
*todo: import navbar css
*/

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar1 = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar_list">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/login">Log In</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/timer"> Timer (logo image here)
                </Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/mySessions">My Sessions</Link>
            </li>

               
            
            {
                localStorage.getItem("pomo_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("pomo_user")
                            navigate("/login",)
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
