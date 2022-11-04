/*
*todo: create component to handle teh session edits for users (grab from editSessionForm)
*todo: refactor the form for your needs
*todo: make Edit Session button functionally updATE STATE 
*todo: allow that button to overwrite the save state in the datasetwith teh updated ifo
*todo: Figure out how to make an edit button next to every listing
*/

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./SessionEditor.css"


export const EditSessionsForm = () => {
    //todo*: set up initial state for Edited Tasks
    const [editedTask, setEditedTask] = useState({        
          taskDescription: "",
          taskTypeId: 0,
          taskDifficultyId: 0,
          isCompleted: false,
          userId: 0
        })
    
        const navigate = useNavigate()
        const {id} = useParams() 

        //todo*: this fetch saves teh entries to teh API 
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
          [] //^remember: When this array is empty, you are observing initial component state
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
        <form className="editSessionForm_container">
        <h2 className="editSessionForm__title">Need  to edit details? Edit your session here: </h2>
            {/* 
            //todo*: put two selects below 
            //todo*: attach classNames to elements for CSS  
            */}
            <fieldset>
                <label className="editSessionForm_difficulty"> Task Difficulty: </label>
                <select className=".editSessionForm_select_difficulty" onChange={
                            (changeEvent) => {
                                const copy = {...editedTask}
                                copy.taskDifficultyId = parseInt(changeEvent.target.value)
                                setEditedTask(copy)
                            }
                        } >
                <option className="select_option" value="0">Choose task difficulty?</option>
                <option className="select_option" value="1">Trivial</option>
                <option className="select_option" value="2">Easy</option>
                <option className="select_option" value="3">Medium</option>
                <option className="select_option" value="4">Hard</option>
                <option className="select_option" value="5">Extreme</option>
                </select>
            </fieldset>

            <fieldset>
                <label  className="editSessionForm_task"> Task Type: </label>
                <select className="form-select-type"onChange={
                            (changeEvent) => {
                                const copy = {...editedTask}
                                copy.taskTypeId = parseInt(changeEvent.target.value)
                                setEditedTask(copy)
                            }
                        } >
                <option className="select_option" value="1">Chores</option>
                <option className="select_option" value="0">Choose Task Type:</option>
                <option className="select_option" value="2">Life</option>
                <option className="select_option" value="3">Liesure/Self-Care</option>
                <option className="select_option" value="4">Work</option>
                <option className="select_option" value="5">Studying</option>
                </select>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label className="editSessionForm_description" htmlFor="description">Re-Describe the task:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
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
                    <label className="editSessionForm_checkbox" htmlFor="name">ONLY Check this box if you completed the task.</label>
                    <input type="checkbox"
                        value={editedTask?.isCompleted}
                        onChange={
                            (changeEvent) => {
                            const copy = {...editedTask}
                            copy.isCompleted = changeEvent.target.checked 
                            setEditedTask(copy)
                        }} />
                </div>
            </fieldset>
            <button className="editSessionForm_saveButton"
            onClick={
                (click) =>{
                    handleSaveButtonClick(click) 
                    //*call me when input form's button post is completed;
                }
            }>
                Submit Edited Session?
            </button>
            </form>)}