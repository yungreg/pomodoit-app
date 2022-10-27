// /*
// todo: creaste a form component for teh timer page
// todo: imclude input field, two select fields, and one checkbox for the boolean
// todo: fetch teh initial state of userPomos
// todo: match user ids to be able to display only the sessions for eth signed in user //!use user id 1 from users test this!

// */ 


// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// export const TaskForm = () => {
//     /*
//         TODO: Add the correct default properties to the
//         initial state object
//     */
//     const [taskEntry, setTaskEntry] = useState({
//       userId: 0,
//       taskDescription: "",
//       taskTypeId: 0,
//       taskDifficultyId: 0,
//       isCompleted: false
//     })
//     /*
//         TODO: Use the useNavigation() hook so you can redirect
//         the user to the ticket list
//     */

//     const localPomoUser = localStorage.getItem("pomo_user")
//     const pomoUserObject = JSON.parse(localPomoUser)

//     const handleSaveButtonClick = (event) => {
//         event.preventDefault()

//         // TODO: Create the object to be saved to the API


//         // TODO: Perform the fetch() to POST the object to the API
//     }

//     return (
//         <form className="taskForm">
//         <h2 className="taskForm__title">What do you want to get done?</h2>
//             {/* put two selects here */}
//             <fieldset>
//                 <select className="form-select-difficulty">
//                 <option value="0">How hard is the task?</option>
//                 <option value={taskEntry.taskTypeId}>{taskEntry.}</option>
//                 </select>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Describe the task here!"
//                         value={taskEntry.taskDescription}
//                         onChange={
//                             (changeEvent) => {
//                                 const copy = {...taskEntry}
//                                 copy.taskDescription = changeEvent.target.value
//                                 setTaskEntry(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             {/* check box for teh completed or not */}
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Check if you get it done!</label>
//                     <input type="checkbox"
//                         // onClick={taskEntry.isCompleted = true} //! <--this onclick may not work. keep an eye on it in CDT 
//                         value={taskEntry.isCompleted}
//                         onChange={
//                             (changeEvent) => {
//                             const copy = {...taskEntry}
//                             copy.isCompleted = changeEvent.target.checked 
//                             setTaskEntry(copy)
//                         }} />
//                 </div>
//             </fieldset>
//             <button className="btn btn-primary">
//                 Submit Session!
//             </button>
//         </form>
//     )
// }