// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateTask } from "../store/taskSlice";

// const EditTaskForm = ({ task }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [status, setStatus] = useState(task.status);
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateTask({ id: task._id, task: { title, description, status } }));
//     setIsEditing(false);
//   };

 
//   if (!isEditing) {
//     return (
//       <button
//         onClick={() => setIsEditing(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//       >
//         Edit
//       </button>
//     );
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 bg-gray-50 p-4 rounded border border-gray-300 mt-4 shadow-md"
//     >
//       <h3 className="text-lg font-semibold text-gray-800">Edit Task</h3>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//         placeholder="Update Title"
//         className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
//       />
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Update Description"
//         className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
//       />
//       <label className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           checked={status}
//           onChange={(e) => setStatus(e.target.checked)}
//           className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
//         />
//         <span className="text-gray-800">Completed</span>
//       </label>
//       <div className="flex gap-2 justify-end">
//         <button
//           type="submit"
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
//         >
//           Save
//         </button>
//         <button
//           type="button"
//           onClick={() => setIsEditing(false)}
//           className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
  
// };

// export default EditTaskForm;
