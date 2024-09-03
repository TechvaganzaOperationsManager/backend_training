import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

mongoose.connect("mongodb://localhost/Office")
  .then(() => console.log("MongoDB connected"));

app.use(express.json());
  app.use("/api/tasks", taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {    
    console.log(`Server running on port ${PORT}`);
});

    