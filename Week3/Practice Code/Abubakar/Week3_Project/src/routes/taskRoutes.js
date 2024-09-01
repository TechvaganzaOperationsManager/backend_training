import { Router } from 'express';
//import {sendMessage} from '../controllers/taskController.js'
//import {getMessage} from '../controllers/taskController.js';
import { getAllTasks, taskById , deleteTaskById , createTask , updateTask} from '../controllers/taskController.js';
import { updateTaskValidator, validateTask } from '../middlewares/validationMiddleware.js';

const router = Router();    


//router.post('/send-message', sendMessage);
//router.get('/message' , getMessage);
router.get('/', getAllTasks);
router.get('/:id', taskById);
router.post('/', validateTask, createTask);
router.put('/:id' , updateTaskValidator , updateTask);
router.delete('/:id' , deleteTaskById);

export default router;











