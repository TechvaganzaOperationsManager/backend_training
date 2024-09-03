import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true , "Title is Required"]
  },
  description: {
    type: String,
    required: [true , "Description is Required"]
  },
  priority: {
    type: String,
    required: [true ,"Priority is required"],
    enum: ['low', 'medium', 'high']
  },
  status: {
    type: String,
    required: [true , "Status is required"],
    enum: ['pending', 'in-progress', 'completed']
  },
  due_date: {
    type: Date,
    required: true  
  },
  assigned_to: {
    type: String,  
    required: true, 
  }
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
