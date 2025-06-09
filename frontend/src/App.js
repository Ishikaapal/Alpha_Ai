import React, { useEffect, useState } from "react";
import axios from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import ConfirmDialog from "./components/ConfirmDialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    // Lock body scroll when modals are open
    if (taskToDelete || selectedTask) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [taskToDelete, selectedTask]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/tasks/");
      setTasks(res.data);
    } catch (err) {
      toast.error(`Failed to load tasks: ${err.message}`);
    }
  };

  const createTask = async () => {
    if (!title.trim()) {
      toast.warning("Title is required.");
      return;
    }

    try {
      await axios.post("/tasks/", {
        title: title.trim(),
        description: description.trim(),
        status: "todo",
      });
      setTitle("");
      setDescription("");
      toast.success("Task added");
      fetchTasks();
    } catch (err) {
      toast.error(
        `Failed to add task: ${err.response?.data?.detail || err.message}`
      );
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await axios.put(`/tasks/${updatedTask.id}/`, updatedTask);
      setSelectedTask(null);
      toast.success("Task updated");
      fetchTasks();
    } catch (err) {
      toast.error(
        `Failed to update task: ${err.response?.data?.detail || err.message}`
      );
    }
  };

  const confirmDelete = async () => {
    if (!taskToDelete?.id) {
      toast.error("No task selected to delete.");
      return;
    }

    try {
      await axios.delete(`/tasks/${taskToDelete.id}/`);
      toast.success("Task deleted");
      setTaskToDelete(null);
      fetchTasks();
    } catch (err) {
      toast.error(
        `Failed to delete task: ${err.response?.data?.detail || err.message}`
      );
    }
  };

  const filteredTasks =
    statusFilter === "all"
      ? tasks
      : tasks.filter((task) => task.status === statusFilter);

  return (
    <div className="App">
      <h1>Task Manager</h1>

      {/* Task Form */}
      <TaskForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmit={createTask}
      />

      {/* Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="statusFilter"><strong>Filter by status:</strong> </label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onEdit={setSelectedTask}
        onDelete={setTaskToDelete}
      />

      {/* Edit Modal */}
      {selectedTask && (
        <EditModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={updateTask}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {taskToDelete && (
        <ConfirmDialog
          message="Are you sure you want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={() => setTaskToDelete(null)}
        />
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
