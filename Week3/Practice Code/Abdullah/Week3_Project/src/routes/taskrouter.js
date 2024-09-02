import express from 'express';
import { getTasks, createTask, getTaskById, delTaskById, updateTask } from '../controllers/taskcontroller.js';
import { validatorTask } from '../middlewares/validationMiddleware.js';
import { updateValidation } from '../middlewares/validationMiddleware.js';
const router = express.Router();

router.get('/', getTasks);
router.post('/', validatorTask, createTask);
router.get('/:id', getTaskById);
router.delete('/:id', delTaskById);
router.put('/:id',updateValidation, updateTask);

export default router;
