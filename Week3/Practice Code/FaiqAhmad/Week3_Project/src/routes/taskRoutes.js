// routes/index.js

import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { errorHandler } from '../errors/errorHandler.js';

const router = express.Router();

// Route to get all tasks
router.get('/tasks', taskController.getAllTasks);

// Route to get a task by ID
router.get('/tasks/:id', taskController.getTaskById);

// Route to create a new task 
router.post('/tasks', taskController.validateTask, taskController.createTask);

// Route to update a task by ID 
router.put('/tasks/:id', taskController.validateTask, taskController.updateTask);

// Route to delete a task by ID
router.delete('/tasks/:id', taskController.deleteTask);


router.use(errorHandler);

export default router;
