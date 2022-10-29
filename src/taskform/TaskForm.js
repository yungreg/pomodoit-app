/*
todo: creaste a form component for teh timer page
todo: imclude input field, two select fields, and one checkbox for the boolean
todo: fetch teh initial state of userPomos
todo: match user ids to be able to display only the sessions for eth signed in user //!use user id 1 from users test this!
todo: create a reset button to make sure the form clears
*/ 


import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TaskForm = () => {
    /*
        *TODO: Add the correct default properties to the initial state object
    */
    const [taskEntry, setTaskEntry] = useState({
    //   userId: pomoUserObject.id, //^<-- this comes later for sending to API
      taskDescription: "",
      taskTypeId: 0,
      taskDifficultyId: 0,
      isCompleted: false
    })
    
    //  TODO*: Use the useNavigate() hook so you can redirect the user back to the timer
    const navigate = useNavigate()

    //^ the two lines below are needed to populate a user id when sent to the API for storage
    const localPomoUser = localStorage.getItem("pomo_user")
    const pomoUserObject = JSON.parse(localPomoUser)

    
        // TODO*: Create the object to be saved to the API
    //! this needs refactoring bfore it can be called:
    const handleSaveButtonClick = (event) => {
        // event.preventDefault(); //!removed this to refresh the page on submission
      //   console.log("YOU DIED");
        const userSessionToStoreInAPI = {
          userId: pomoUserObject.id,
          taskDescription: taskEntry.taskDescription,
          taskTypeId: taskEntry.taskTypeId,
          taskDifficultyId: taskEntry.taskDifficultyId,
          isCompleted: taskEntry.isCompleted,
        };
        //^ this is the template for info that'll get sent to teh API


        //* TODO: Perform the fetch() to POST the object to the API
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
          });
      };

    return (
        <form className="taskForm">
        <h2 className="taskForm__title">What do you want to get done?</h2>
            {/* put two selects here */}
            <fieldset>
                <label> Task Difficulty: </label>
                <select className="form-select-difficulty" onChange={
                            (changeEvent) => {
                                const copy = {...taskEntry}
                                copy.taskDifficultyId = changeEvent.target.value
                                setTaskEntry(copy)
                            }
                        } >
                <option value="0">How hard is the task?</option>
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
                                const copy = {...taskEntry}
                                copy.taskTypeId = changeEvent.target.value
                                setTaskEntry(copy)
                            }
                        } >
                <option value="0">What sort of task is it?</option>
                <option value="1">Chores</option>
                <option value="2">Life</option>
                <option value="3">Liesure/Self-Care</option>
                <option value="4">Work</option>
                <option value="5">Studying</option>
                </select>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
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
            {/* check box for completed or not */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Check if you complete the task!</label>
                    <input type="checkbox"
                        //! <--this onclick may not work. keep an eye on it in CDT 
                        value={taskEntry.isCompleted}
                        onChange={
                            (changeEvent) => {
                            const copy = {...taskEntry}
                            copy.isCompleted = changeEvent.target.checked 
                            setTaskEntry(copy)
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
                Submit Session & Refresh Timer!
            </button>

        </form>
    )
}