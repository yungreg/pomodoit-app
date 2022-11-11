/* 
^note: I used teh toString() method to show teh bolean value as a true or falseo. that should work with the checkbox
*todo: create something similat to ticketlist from Honey Raes
*todo: interpolate the names in teh display //!note: teh expand query will do this for ya!
*todo: create teh map to display all the relevant sessions
*todo: send this to app to be remembered
*/


import { useEffect, useState } from "react"
import { SessionSections } from "./Sessions"
import "./UserSessionsList.css"


export const UserSessionsList = () => {
    const [sessions, setSessions] = useState([])

    const localPomoUser = localStorage.getItem("pomo_user")
    const pomoUserObject = JSON.parse(localPomoUser)
// ^ this iks hpow you will match the user object to their sessions.
    


useEffect(
        () => {
            fetch(`http://localhost:8088/userSessions/?userId=${pomoUserObject.id}&_expand=user&_expand=taskType&_expand=taskDifficulty`)
            .then(res => res.json())
            .then((sessionsArray) => {
                setSessions(sessionsArray)
            })
        }, [pomoUserObject.id] 
    )

    //^note to self: this one will watch sessions a user's info, than match that info with teh right user id, and pull that info from storage. 
    //* Jacob showed me line 26: how to just interpolate the users ID into teh fetch call, so that you don't have to do this second useEffect!  Smart!
    

    return <>
        <section className="sessionsList">
        {
            sessions.map(session => <SessionSections 
                key={`session--${session.id}`}
                id={session.id}
                taskType={session.taskType?.type}
                taskDifficulty={session.taskDifficulty?.difficulty}
                taskDescription={session.taskDescription}
                isCompleted={session.isCompleted.toString()}
                session={session}
            />) 
               
        } 
    </section>
    </>
}
