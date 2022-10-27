/* 
^note: I used teh toString() methof to show teh bolean value as a true or falseo. that should work with the checkbox
*todo: create something similat to ticketlist from Honey Raes
*todo: interpolate the names in teh display //!note: teh expand query will do this for ya!
*todo: create teh map to display all the relevant sessions
*todo: send this to app to be renvbered
todo, you'll need a useeffect o filter through what tckets to show per user
*/


import { useEffect, useState } from "react"


export const UserSessionsList = () => {
    const [sessions, setSessions] = useState([])
//^idea: put your filter in the useEffect to be able to show JUST the pomofor a specific user. create towo new user id entries in yoru database to test this
    useEffect(
        () => {
            fetch(`http://localhost:8088/userSessions/?_expand=user&_expand=taskType&_expand=taskDifficulty`)
            .then(res => res.json())
            .then((sessionsArray) => {
                setSessions(sessionsArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <>
    
    <section className="sessionsList">
        {
            sessions.map((session) => {
                return <section key={session.id} className="sessionListItem"> 
                    <h2>Here's your sessions, {session.user.fullName}! </h2>
                    <></>
                    Task Type: {session.taskType.type} <br/>
                    Difficulty Level: {session.taskDifficulty.difficulty}<br/>
                    Task Description: {session.taskDescription}<br/>
                    Completed: {session.isCompleted.toString()}<br/> 
                    </section>
            })
        }
    </section>
    </>
}