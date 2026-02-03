import axios from "axios";

const BASE_URL = "https://task-management-system-589e.onrender.com";

// Get all tasks
export const getTasks = () => {
  return axios.get(BASE_URL).then((res) => res.data);
};

// Add new task
export const addTask = (task) => {
  return axios.post(BASE_URL, task);
};

// Update task
export const updateTask = (id, task) => {
  return axios.put(`${BASE_URL}/${id}`, task);
};

// Delete task
export const deleteTask = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
