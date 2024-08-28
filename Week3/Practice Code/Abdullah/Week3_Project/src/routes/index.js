import express from 'express'
import taskrouter from './taskrouter.js'


const router = express.Router()
router.use ('/tasks', taskrouter);

//export const router = Router();
//router.get('/:id',getPosts)
//  /* /api/ endpoint as every route will begin with /api/ */
// router.get('/', (req, res, next)=>{ 
//   res.send('Hello World');
// });

//router.get('/:id',getPosts)///


/* TODO: */
// Attach Tasks Routes
// HINT: router.use('/tasks', taskRoutes);
// index.js
export default router;


