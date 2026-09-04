import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskControls from "./components/TaskControls";
import TaskList from "./components/TaskList";
import {
  getStoredTasks,
  updateLocalStorage
} from "./utils/localStorageUtils";

function App() {
  const [tasks, setTasks] = useState(getStoredTasks());

    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

    const addTask = (newTask) => {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      updateLocalStorage(updatedTasks);
    };

    const removeTask = (id) => {
      const updatedTasks = tasks.filter((t) => t.id !== id);
      setTasks(updatedTasks);
      updateLocalStorage(updatedTasks);
    };

    const updateTask = ({ taskId, editText, editPriority }) => {
      const updatedTasks = tasks.map((task) =>
      task.id === taskId ?
      { ...task, text: editText, priority: editPriority }
      : task
      );
      setTasks(updatedTasks);
      updateLocalStorage(updatedTasks);
    };

    const toggleTaskDone = (id) => {
      const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done} :task
      );
      setTasks(updatedTasks);
      updateLocalStorage(updatedTasks);
    };
    
    const sortTasks = () => {
      const sortedTasks = [...tasks]
      .sort((a, b) => a.priority - b.priority);
      setTasks(sortedTasks);
      updateLocalStorage(sortedTasks);
    };


  return (
    <div style={{
      padding: "20px",
      fontFamily: "Arial",
      margin: "auto",
      maxWidth: "800px",
    }}>
      <h2 style={{ textAlign: "center" }}>To-Do List </h2>
      <TaskForm addTask={addTask} />
      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList 
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
        removeTask={removeTask}
        updateTask={updateTask}

      />
    </div>
  )
}

export default App
