/*
*todo: grab the component from Honey Rae's
todo: refactor component for PomodoIT links
todo: import navbar css
*/

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
            
                <Link className="navbar__link" to="/MySessions">My Sessions</Link>

                <Link className="navbar__link" to="/timer"><img src="https://www.fillmurray.com/640/360"
                alt="Placeholder image fopr the logo " width="200" height="150" />
                </Link>
               
            </li>
            {
                localStorage.getItem("pomo_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("pomo_user")
                            navigate("/",)
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
