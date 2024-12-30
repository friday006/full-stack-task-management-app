import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, clearEditTask } from "../store/taskSlice";

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const editingTaskId = useSelector((state) => state.tasks.editingTaskId);
  const tasks = useSelector((state) => state.tasks.tasks);

  const taskBeingEdited = tasks.find((task) => task._id === editingTaskId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskBeingEdited) {
      setTitle(taskBeingEdited.title);
      setDescription(taskBeingEdited.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [taskBeingEdited]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required");

    if (editingTaskId) {
      dispatch(updateTask({ id: editingTaskId, task: { title, description } }));
      dispatch(clearEditTask());
    } else {
      dispatch(addTask({ title, description }));
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 sm:p-6 bg-gray-50 rounded shadow-md w-full"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 text-sm sm:text-base border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 text-sm sm:text-base border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="p-2 text-sm sm:text-base bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {editingTaskId ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
