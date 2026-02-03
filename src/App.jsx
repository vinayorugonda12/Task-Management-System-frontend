import { useEffect, useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import SearchBar from "./components/SearchBar";

import { getTasks, addTask, deleteTask, updateTask } from "./api/api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);

  const load = () => getTasks().then(setTasks);

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async (task) => {
    await addTask(task);
    load();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    load();
  };

  const handleToggle = async (task) => {
    await updateTask(task.id, { ...task, completed: !task.completed });
    load();
  };

  const handleSaveEdit = async (updatedTask) => {
    setEdit(updatedTask);
  };

  const closeEdit = async (action) => {
    if (action === "save") {
      await updateTask(edit.id, edit);
      load();
    }
    setEdit(null);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <SearchBar onSearch={setSearch} />

      <TaskForm onAdd={handleAdd} />

      <TaskList
        tasks={tasks.filter((t) =>
          t.title.toLowerCase().includes(search.toLowerCase())
        )}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={setEdit}
      />

      {edit && <EditModal task={edit} onSave={handleSaveEdit} onClose={closeEdit} />}
    </div>
  );
}
