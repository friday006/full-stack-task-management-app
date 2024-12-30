require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const task = require("./routes/taskRoutes")
const path = require("path")

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

const _dirname = path.resolve();

// MongoDB Connection
mongoose
.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))

// routes
app.use("/tasks",task);


app.use(express.static(path.join(_dirname, "/frontend/build")))
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","build", "index.html"));
})

  // Start Server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  