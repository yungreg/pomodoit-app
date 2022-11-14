/* 
*todo: import register code from Honey raes
*todo: refactor teh code to make sure it works for PomoDoIt
*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: "",
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("pomo_user", JSON.stringify({
                        id: createdUser.id,
                    }))

                    navigate("/login")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    //^ note to self: reuse this window alert once the task form is submitted
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                    window.alert("All set! Redirecting you to the Log In page...")
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main className="container--login" style={{ textAlign: "center" }}>
            <form className="register--loginForm" onSubmit={handleRegister}>
                <h3 className="register--headline">Sign up, sign in, & ✨PomoDoIt!✨</h3>
                <fieldset>
                    <input onChange={updateCustomer}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your full name here" required autoFocus />
                </fieldset>
                <fieldset>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="Register your email address here" required />
                </fieldset>
                <fieldset>
                    <button className="button--register" type="submit"> Create Your Profile! </button>
                </fieldset>
            </form>
        </main>
    )
}

