import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, setEditTask, clearEditTask, updateTask } from "../store/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const editingTaskId = useSelector((state) => state.tasks.editingTaskId);
  const dispatch = useDispatch();

  const handleEditClick = (task) => {
    if (editingTaskId === task._id) {
      dispatch(clearEditTask());
    } else {
      dispatch(setEditTask(task._id));
    }
  };

  const toggleStatus = (task) => {
    const updatedTask = { ...task, status: !task.status };
    dispatch(updateTask({ id: task._id, task: updatedTask }));
  };

  return (
    <div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="p-4 sm:p-6 border border-gray-300 rounded shadow flex flex-col sm:flex-row justify-between items-stretch sm:items-stretch gap-2"
        >
            {/* Task Content */}
            <div className="flex-1 w-full p-3 sm:p-4 text-left break-words  bg-slate-100 rounded">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                {task.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">
                {task.description}
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium mt-2">
                Status:{" "}
                <span
                  className={task.status ? "text-green-700" : "text-yellow-600"}
                >
                  {task.status ? "Completed" : "Pending"}
                </span>
              </p>
            </div>

            {/* Task Actions */}
            <div className="flex-shrink-0 flex flex-row gap-2 justify-center p-2 sm:p-4 sm:flex-col rounded">
              <button
                onClick={() => toggleStatus(task)}
                className="bg-blue-500 px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base w-full sm:w-auto text-white rounded hover:bg-blue-600 transition"
              >
                {task.status ? "Mark as To Do" : "Mark as Completed"}
              </button>
              <button
                onClick={() => dispatch(deleteTask(task._id))}
                className="bg-red-500 px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base w-full sm:w-auto text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditClick(task)}
                className="bg-yellow-500 px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base w-full sm:w-auto text-white rounded hover:bg-yellow-600 transition"
              >
                {editingTaskId === task._id ? "Cancel" : "Edit"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
