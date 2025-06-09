import React from 'react';

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div className="card" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <span>Status: {task.status}</span><br />
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
