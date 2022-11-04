/*
*todo: import the login components from Honey Rae's
*todo: import css 
*todo: make sure to reroute soemwhere when the login is successful
*todo: refactor jsx this app to become PomoDoIt! //!remember classes and tehg second button for the register page
*todo: make  a button for registering/
todo: Adjust the class nmames to match teh button for Reegistering
todo: make sur eto make teh same adjustments for teh register page
*/

import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("pomo_user", JSON.stringify({
                        id: user.id

                    }))

                    navigate("/timer")
                }
                else {
                    window.alert("Invalid login! Have you Signed up yet?")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
              <div className="welcome_message">
                <h1 className="login--h1">Welcome to PomoDoIt!</h1>
                <h2 className="login--h2">✨PomoDoIt until it’s PomoDone!✨</h2>
              </div>
                <form className="form--login" onSubmit={handleLogin}>
                    <h3 className="login--h3">Please sign in to get started!</h3>
                    <fieldset>
                        <label htmlFor="inputEmail">  </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Please enter email address you signed up with here:"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="button--login"type="submit">
                            Log in!
                        </button>
                    </fieldset>
                </form>
            </section>
            <section >
               <button className="button--register">
                <Link to="/register">Not Signed up yet?</Link>
               </button>
            </section>
        </main>
    )
}
