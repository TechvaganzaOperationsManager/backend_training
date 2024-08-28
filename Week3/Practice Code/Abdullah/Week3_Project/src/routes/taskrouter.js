import express from 'express'
import {  getTasks,createTask,getTaskById,delTaskById, updateTask} from '../controllers/taskcontroller.js'
//import router from './index.js';
import { validatorTask } from '../middlewares/validationMiddleware.js';
const router = express.Router();

router.get('/', getTasks);
router.post('/',validatorTask,createTask)
// router.get('/', getTaskById)
router.get('/:id',getTaskById)
router. delete('/:id',delTaskById)
router.put('/:id',updateTask)

export default router