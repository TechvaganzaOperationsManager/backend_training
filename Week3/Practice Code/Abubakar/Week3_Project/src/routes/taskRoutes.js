import express from 'express';
import { Router } from 'express';
//import {sendMessage} from '../controllers/taskController.js'
//import {getMessage} from '../controllers/taskController.js';
import { getAllTasks, TaskById , deleteTaskById , createTask , updateTask} from '../controllers/taskController.js';
import { validateTask } from '../middlewares/validationMiddleware.js';



const router = Router();    

//router.post('/send-message', sendMessage);
//router.get('/message' , getMessage);
router.get('/', getAllTasks);
router.get('/:id', TaskById);
router.post('/', validateTask, createTask);
router.put('/:id' , validateTask , updateTask);
router.delete('/:id' , deleteTaskById);




export default router;









