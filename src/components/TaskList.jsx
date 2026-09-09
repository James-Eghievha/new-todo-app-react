import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";



const TaskList = ({
            tasks, 
            showOnlyIncomplete, 
        }) => {

    const [editingTaskId, setEditingTaskId] = useState(null);

    
    return(
        <ul>
            {tasks
            .filter((task) => !showOnlyIncomplete || !task.done)
            .map((task) => (
                <li key={task.id}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    gap: "10px",
                }}
                >
                    {editingTaskId === task.id ? (
                        <EditTaskForm
                            task={task}
                            setEditingTaskId={setEditingTaskId}
                        />
                    ) :
                    (<TaskItem 
                        task={task} 
                        setEditingTaskId={setEditingTaskId}
                    />)}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;