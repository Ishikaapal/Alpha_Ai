// frontend/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from '../api/api';  // ✅ import configured axios

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks/')
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
