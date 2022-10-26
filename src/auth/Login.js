/*
*todo: import the login components from Honey Rae's
*todo: import css 
todo: refactor jsx this app to become PomoDoIt! //!remember classes and tehg second button for the register page
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

        return fetch(`http://localhost:8088/users`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("pomo_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login! Please Try again!")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Welcome to PomoDoIt!</h1>
                    <h2>✨PomoDoIt until it’s PomoDone.✨</h2>
                    <h3>Please sign in</h3>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Log in!
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="button--register">
               <button>
                <Link to="/register">Not a member yet?</Link>
               </button>
            </section>
        </main>
    )
}
