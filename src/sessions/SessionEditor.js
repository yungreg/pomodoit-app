/*
*todo: create component to handle teh session edits for users (grab from editSessionForm)
*todo: refactor the form for your needs
*todo: make Edit Session button functionally updATE STATE 
*todo: allow that button to overwrite the save state in the datasetwith teh updated ifo
todo: Figure out how to make an edit button next to every listing
*/

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const EditSessionsForm = () => {
    //set up initial staste
    const [editedTask, setEditedTask] = useState({        
          taskDescription: "",
          taskTypeId: 0,
          taskDifficultyId: 0,
          isCompleted: false,
          userId: 0
        })
    
        const navigate = useNavigate()
        const {id} = useParams() 

        //this fetch saves teh entries to teh API 
        useEffect(
          () => {
            fetch(
              `http://localhost:8088/userSessions/${id}`
            )
              .then((res) => res.json())
              .then((input) => {
                const userUpdatedSession = input
                setEditedTask(userUpdatedSession)
              });
          },
          [] // When this array is empty, you are observing initial component state
        );

    const handleSaveButtonClick = (event) => {
        return fetch(`http://localhost:8088/userSessions/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(editedTask)
        })
        .then(res => res.json())
        .then(() => {
            navigate("/mySessions")
        })
    }
    return (
        <form className="editSessionForm">
        <h2 className="editSessionForm__title">Need  to edit details? Edit your session here: </h2>
            {/* put two selects here */}
            <fieldset>
                <label> Task Difficulty: </label>
                <select className="form-select-difficulty" onChange={
                            (changeEvent) => {
                                const copy = {...editedTask}
                                copy.taskDifficultyId = parseInt(changeEvent.target.value)
                                setEditedTask(copy)
                            }
                        } >
                <option value="0">Choose task difficulty?</option>
                <option value="1">Trivial</option>
                <option value="2">Easy</option>
                <option value="3">Medium</option>
                <option value="4">Hard</option>
                <option value="5">Extreme</option>
                </select>
            </fieldset>

            <fieldset>
                <label> Task Type: </label>
                <select className="form-select-type"onChange={
                            (changeEvent) => {
                                const copy = {...editedTask}
                                copy.taskTypeId = parseInt(changeEvent.target.value)
                                setEditedTask(copy)
                            }
                        } >
                <option value="0">Choose Task Type:</option>
                <option value="1">Chores</option>
                <option value="2">Life</option>
                <option value="3">Liesure/Self-Care</option>
                <option value="4">Work</option>
                <option value="5">Studying</option>
                </select>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Re-Describe the task:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        // placeholder="Describe the task here!"
                        value={editedTask?.taskDescription}
                        onChange={
                            (changeEvent) => {
                                const copy = {...editedTask}
                                copy.taskDescription = changeEvent.target.value
                                setEditedTask(copy)
                            }
                        } />
                </div>
            </fieldset>
  
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Check if you completed the task!</label>
                    <input type="checkbox"
                        //! <--this onclick may not work. keep an eye on it in CDT 
                        value={editedTask?.isCompleted}
                        onChange={
                            (changeEvent) => {
                            const copy = {...editedTask}
                            copy.isCompleted = changeEvent.target.checked 
                            setEditedTask(copy)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-savesession"
            onClick={
                (click) =>{
                    handleSaveButtonClick(click) 
                    //*call me when input form's button post is completed;
                }
            }>
                Submit Edited Session!
            </button>
            </form>)}