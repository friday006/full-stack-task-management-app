import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Async actions
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(API_URL+"/fetchTasks");
  return response.data;
});

export const deleteTask = createAsyncThunk("/deleteTask", async (id) => {
  await axios.delete(`${API_URL}/${"/deleteTask/"+id}`);
  return id;
});

export const addTask = createAsyncThunk("/addTask", async (task) => {
  const response = await axios.post(API_URL + "/addTask", task);
  return response.data;
});

export const updateTask = createAsyncThunk("/updateTask", async ({ id, task }) => {
  const response = await axios.put(`${API_URL + "/updateTask"}/${id}`, task);
  return response.data;
});

// Slice
const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], loading: false, error: null,
    editingTaskId: null, // Track which task is being edited
    },
  reducers: {
    setEditTask: (state, action) => {
      state.editingTaskId = action.payload; // Set the ID of the task to be edited
    },
    clearEditTask: (state) => {
      state.editingTaskId = null; // Clear the editing task ID when editing is canceled
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks = [action.payload, ...state.tasks];
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) state.tasks[index] = action.payload;
      })
      ;
  },
});

export const { setEditTask, clearEditTask } = taskSlice.actions;
export default taskSlice.reducer;