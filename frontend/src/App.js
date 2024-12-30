import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./store/taskSlice";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <div className="hidden sm:flex items-center justify-center">
        {/* This wrapper will be hidden on small screens */}
      </div>
      <div className="text-center bg-white p-4 sm:p-6 mt-5 rounded shadow-lg w-full sm:w-2/4 flex flex-col mx-2 sm:mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Task Management</h1>
        <AddTaskForm />
        {loading && <p className="text-gray-500">Loading tasks...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="flex-1 overflow-y-auto mt-4">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;
