
/*
*todo: move deletebuytton() sessionSections
*todo: pass in session info as a prop then i'll be able to access it inside SessionSections
*todo: make the task number display bbecome a link to tak eyou to the edit screen where yoj can edid individual  tasks
*/

import { Link } from "react-router-dom";

export const SessionSections = ({ id, session, taskType, taskDifficulty, taskDescription, isCompleted }) => {

    const deleteButton = () => {
        return <button onClick={()=>{
            fetch(
                `http://localhost:8088/userSessions/${session.id}`, { 
                    method: "DELETE"
                }
              )
                .then(response => response.json)
                .then(() => {
                
                });
        }} className="session__btn-delete">Delete Session?</button>

}
    
    return <>
    <section className="sessionListItem"> 
    <Link to={`/mySessions/${id}`}> Task Number: {id}</Link><br/>
    Task Type: {taskType} <br/>
    Difficulty Level: {taskDifficulty}<br/>
    Task Description: {taskDescription}<br/>
    Completed: {isCompleted}<br/> 
    {deleteButton()}
    </section>
   </>
} 
