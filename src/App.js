import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear input after adding task
    } else {
      alert("Please write your task first!");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task at index
  }


  return (
    <div className="main-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter your task here"
        className="entry"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Controlled input
      />
      <button onClick={addTask} className="btn">Add Task</button>
      
      <div className="task-container">
        <h3>Task List</h3>
        <ul>
          {tasks.map((t, index) => (
            <div className="tsk">
              <li key={index}>
              {t}
              </li>
              <button onClick={() => deleteTask(index)} className="del-btn">Remove</button>
            </div>  
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;