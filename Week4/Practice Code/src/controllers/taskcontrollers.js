import Task from '../models/infoTask.js'; 
export const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);s
    } catch (error) {
        console.error("Error retrieving tasks:", error); 
        return res.status(500).send("Error retrieving tasks");
    }
};

export const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id; // Changed to use 'id'
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).send(`Task with ID ${taskId} not found`);
        }
        return res.status(200).json(task); 
    } catch (error) {
        console.error("Error retrieving task by ID:", error); 
        return res.status(500).send("Error retrieving task");
    }
};

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id; // Changed to use 'id'
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(404).send(`Task with ID ${taskId} not found`);
        }
        return res.status(200).send(`Task with ID ${taskId} deleted`); 
    } catch (error) {
        console.error("Error deleting task:", error); 
        return res.status(500).send("Error deleting task");
    }
};

export const createTask = async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            assigned_to: req.body.assigned_to,
        });
        
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
    } catch (error) {
        console.error("Error saving task:", error); 
        return res.status(500).send("Error saving task");
    }
};


export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id; 
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                priority: req.body.priority,
                assigned_to: req.body.assigned_to,
                        },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).send(`Task with ID ${taskId} not found`);
        }
        return res.status(200).json(updatedTask); 
    } catch (error) {
        console.error("Error updating task")
        }
    }
