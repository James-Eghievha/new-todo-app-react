import { useState } from "react";
import { Check } from "lucide-react";


const EditTaskForm = ({ task, setEditingTaskId, updateTask }) => {

    const [editText, setEditText] = useState(task.text);
    const [editPriority, setEditPriority] = useState(task.priority);

    const saveEdit = () => {
        if (editText.trim()) {
            //call update task passed down from App
            updateTask({ taskId: task.id, editText, editPriority });

            //update editingTaskId state to null
            setEditingTaskId(null);
        };
    };

    return(
        <>
            <input 
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{
                    flexGrow: 1,
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <input 
                type="number"
                min="1"
                value={editPriority}
                onChange={(e) => setEditPriority(Number(e.target.value))}
                style={{
                    flexGrow: 1,
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                onClick={saveEdit}
                style={{
                    borderRadius: "50%",
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <Check size={16} />
            </button>
        </>
    );
}


export default EditTaskForm;