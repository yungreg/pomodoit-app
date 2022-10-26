/* 
*todo: create something similat to ticketlist from Honey Raes
todo: interpolate the names in teh display
todo: create teh map to display all the relevant sessions
todo: send this to app to be renvbered
*/


import { useEffect, useState } from "react"


export const userSessionsList = () => {
    const [sessions, setSessions] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/userSessions`)
            .then(res => res.json())
            .then((sessionsArray) => {
                setSessions(sessionsArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <>
    <h2>Here's your sessions, interpolate name here</h2>
    <section className="sessionsList">
        {
            sessions.map((session) => {
                return <section> 
                    Task Type: ${session.taskTypeId}
                    Difficulty Level: ${session.taskDifficultyId}
                    Task Description: ${session.taskDescription}
                    Completed?: ${session.isCompleted}
                    </section>
            })
        }
    </section>
    </>
}