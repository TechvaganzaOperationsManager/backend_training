import express from 'express';
import { getTask, getTaskById, deleteTask, createTask, updateTask } from '../controllers/taskcontrollers.js';

const router = express.Router(); 

router.get('/', getTask); 
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
