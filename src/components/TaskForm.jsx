import { useState } from "react";
import { Plus } from "lucide-react";

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority] = useState(1);

    const handleSubmit = () => {
        //Check its not just white space
        if (newTask.trim()) {
        // Call the addTask function with a new task object
        addTask({
            id: Date.now(), //unique id based on current timestamp
            text: newTask, //the task entered by the user
            priority: newPriority, //user defined priority number
            done: false, //new task starts as not completed
        });
        //Clear the input field after submission completes
        setNewTask("");
        setNewPriority(1);
        }

    };

    const inputStyle = {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }

    return(
        <div>
            <div style={{ display: "flex", gap: "10px", }}>
                <input
                    type="text"
                    placeholder="Enter new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value) }
                    style={{...inputStyle, flexGrow: 1}}
                />
                <input 
                    type="number"
                    min="1"
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    style={{...inputStyle, width: "3.75rem", }}
                />
            </div>
            <button onClick={handleSubmit}
                    style={{
                        display: "block",
                        margin: "20px auto 0",
                        borderRadius: "50%",
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "12px",
                        border: "none",
                        cursor: "pointer",
            }}>
                <Plus size={20} />
            </button>
        </div>
    );
}

export default TaskForm;