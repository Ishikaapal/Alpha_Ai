import React from 'react';

function TaskForm({ title, description, setTitle, setDescription, onSubmit }) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={onSubmit}>Add Task</button>
    </div>
  );
}

export default TaskForm;
