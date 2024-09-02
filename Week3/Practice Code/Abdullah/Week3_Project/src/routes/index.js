import express from 'express'
import taskrouter from './taskrouter.js'

import { validatorTask } from '../middlewares/validationMiddleware.js';
const router = express.Router()
router.use ('/tasks', taskrouter);


export default router;


