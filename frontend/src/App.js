import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:8000/api/tasks/");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await axios.post("http://localhost:8000/api/tasks/", {
      title: newTask,
      description: "",
      status: "todo",
    });
    setNewTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Task Manager</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task title"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
