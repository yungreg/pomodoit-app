
/*
*todo: move deletebuytton() sessionSections
*todo: pass in session info as a prop then i'll be able to access it inside SessionSections
*todo: make the task number display bbecome a link to tak eyou to the edit screen where yoj can edid individual tasks
*/

import { Link, useNavigate } from "react-router-dom";
import "./Sessions.css"


export const SessionSections = ({ id, session, taskType, taskDifficulty, taskDescription, isCompleted }) => {

    // const navigate = useNavigate()
    const deleteButton = () => {
        return <button className="session__btn-delete" onClick={()=>{
            fetch(
                `http://localhost:8088/userSessions/${session.id}`, { 
                    method: "DELETE"
                }
              )
                .then(response => response.json)
                .then(() => {
                    window.alert("Session successfully deleted. Refresh this page to continue.");
                   
                });
        }} >Delete Session?</button>

}
    
    return (
      <>
        <section className="sessionsList">
          <ul type="none" className="user_sessionList">
            <li className="user_sessionListItem">
              <ul>
                <li className="user_sessionListTaskNumber">
                  <Link to={`/mySessions/${id}`}> Task Number: {id}</Link>
                  <br />
                </li>
                <li>
                  Task Type: {taskType} <br />
                </li>
                <li>
                  Difficulty Level: {taskDifficulty}
                  <br />
                </li>
                <li>
                  Task Description: {taskDescription} <br />
                </li>
                <li>
                  Completed: {isCompleted}
                  <br />
                </li>
                {deleteButton()}
              </ul>
            </li>
          </ul>
        </section>
      </>
    );
} 
