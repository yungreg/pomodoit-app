/*
*todo: creaste a form component for teh timer page
*todo: imclude input field, two select fields, and one checkbox for the boolean
*todo: fetch teh initial state of userPomos
*todo: match user ids to be able to display only the sessions for eth signed in user 
*/ 


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./TaskForm.css"


export const TaskForm = () => {
    
    //todo*: Add the correct default properties to the initial state object
    
    const [taskEntry, setTaskEntry] = useState({
      taskDescription: "",
      taskTypeId: 0,
      taskDifficultyId: 0,
      isCompleted: false
    })
    
    // todo*: Use the useNavigate() hook so you can redirect the user back to the timer
    const navigate = useNavigate()

    const localPomoUser = localStorage.getItem("pomo_user")
    const pomoUserObject = JSON.parse(localPomoUser)

    
        // todo*: Create the object to be saved to the API
        // todo*: this needs refactoring bfore it can be called: 
    const handleSaveButtonClick = (event) => {
        // event.preventDefault(); //^ note to self: removed this to refresh the page on submission
        const userSessionToStoreInAPI = {
          userId: pomoUserObject.id,
          taskDescription: taskEntry.taskDescription,
          taskTypeId: taskEntry.taskTypeId,
          taskDifficultyId: taskEntry.taskDifficultyId,
          isCompleted: taskEntry.isCompleted,
        };
        //^ this is the template for info that'll get sent to teh API


        // todo*: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/userSessions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userSessionToStoreInAPI),
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/timer");
            window.alert("Session submitted! Good for you! Self check in time. Can you keep going?")
          });
      };

    return (
    <div className="taskForm_container">

        <form className="taskForm_form">
        <h2 className="taskForm__titleh2">Step 1:</h2>
        <h3 className="taskForm__titleh3">Describe what task you want to focus on:</h3>
        <fieldset>
                <div className="form-group">
                    <label className="taskForm_selectText" htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Describe the task here!"
                        value={taskEntry.taskDescription}
                        onChange={
                            (changeEvent) => {
                                const copy = {...taskEntry}
                                copy.taskDescription = changeEvent.target.value
                                setTaskEntry(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <label className="taskForm_selectText"> Task Difficulty: </label>
                <select className="form-select-difficulty" onChange={
                            (changeEvent) => {
                                const copy = {...taskEntry}
                                copy.taskDifficultyId = changeEvent.target.value
                                setTaskEntry(copy)
                            }
                        } >
                <option className="select_option" value="0">How hard is the task?</option>
                <option className="select_option" value="1">Trivial</option>
                <option className="select_option" value="2">Easy</option>
                <option className="select_option" value="3">Medium</option>
                <option className="select_option" value="4">Hard</option>
                <option className="select_option" value="5">Extreme</option>
                </select>
            </fieldset>

            <fieldset>
                <label className="taskForm_selectText"> Task Type: </label>
                <select className="form-select-type"onChange={
                            (changeEvent) => {
                                const copy = {...taskEntry}
                                copy.taskTypeId = changeEvent.target.value
                                setTaskEntry(copy)
                            }
                        } >
                <option className="select_option" value="0">What sort of task is it?</option>
                <option className="select_option" value="1">Chores</option>
                <option className="select_option" value="2">Life</option>
                <option className="select_option" value="3">Liesure/Self-Care</option>
                <option className="select_option" value="4">Work</option>
                <option className="select_option" value="5">Studying</option>
                </select>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <h2 className="taskForm__titleh2">Step 3:</h2>
                    <label className="taskForm_selectText_check" htmlFor="name">Check this box if you complete the task -->></label>
                    <input type="checkbox"
                        value={taskEntry.isCompleted}
                        onChange={
                            (changeEvent) => {
                            const copy = {...taskEntry}
                            copy.isCompleted = changeEvent.target.checked 
                            setTaskEntry(copy)
                        }} />
                </div>
            </fieldset>
            <button className="button_savesession"
            onClick={
                (click) =>{
                    handleSaveButtonClick(click) 
                }
            }>
                Submit Session & Refresh Timer!
            </button>

        </form>
    </div>
    )
}