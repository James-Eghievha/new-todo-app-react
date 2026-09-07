import { updateLocalStorage } from "../utils/localStorageUtils";


//this is the reducer function that handles all the state changes for the task list
export const taskReducer = (state, action) => {

    //we will store the new version of the task lists here
    let updatedTasks;

    //decide what to do based on the actioon type
    switch (action.type) {

        //if the action type is "ADD", we add the new task to the list
        case "ADD":
            //we create a new array with the existing tasks and the new task
            updatedTasks = [...state, action.payload];
            break;

        //if the action type is "REMOVE", we remove the task with the given id from the list
        case "REMOVE":
            //we create a new array that filters out the task with the given id
            updatedTasks = state.filter((t) => t.id !== action.payload);
            break;


        //if the action type is "UPDATE", we update the task with the given id
        case "UPDATE":
            //we create a new array that updates the task with the given id
            updatedTasks = state.map((task) =>
                task.id === action.payload.taskId ?
                { ...task, text: action.payload.editText, priority: action.payload.editPriority }
                : task
                );
                break;


        case "TOGGLE_DONE":
            //we create a new array that toggles the done status of the task with the given id
            updatedTasks = state.map((task) =>
                task.id === action.payload ? { ...task, done: !task.done} :task
                );
                break;

        //if the acti0on is to sort tasks by priority
        case "SORT":
            // make a copy of the task and sort them in the order of ascendng priority (lower number first)
            updatedTasks = [...state]
            .sort((a, b) => a.priority - b.priority);
            break;
                

        //if no current action type is found, just return the current state
        default:
            updatedTasks = state;
    }

    //saves the updated task list to localStorage for persistence
    updateLocalStorage(updatedTasks);


    //rturns new state to react
    return updatedTasks;

}