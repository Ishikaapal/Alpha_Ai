import React, { useState, useEffect } from 'react';

function EditModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const handleSave = () => {
    onSave({ ...task, title, description, status });
  };

  if (!task) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <input value={description} onChange={e => setDescription(e.target.value)} />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EditModal;
