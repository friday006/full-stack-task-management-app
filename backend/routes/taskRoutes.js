const router = require("express").Router();
const Task = require("../models/Task");
const bodyParser = require("body-parser");

// Middleware
router.use(bodyParser.json());

// Routes
// Get all tasks
router.get("/fetchTasks", async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch tasks" });
    }
  });
  
  // Add a new task
  router.post("/addTask", async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
  
    try {
      const newTask = new Task({ title, description });
      await newTask.save();
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).json({ error: "Failed to add task" });
    }
  });
  
  // Update a task
  router.put("/updateTask/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, description, status },
        { new: true } // return new updated task
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      res.status(200).json(updatedTask);
    } catch (err) {
      res.status(500).json({ error: "Failed to update task" });
    }
  });
  
  // Delete a task
  router.delete("/deleteTask/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedTask = await Task.findByIdAndDelete(id);
  
      if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete task" });
    }
  });

  module.exports = router;