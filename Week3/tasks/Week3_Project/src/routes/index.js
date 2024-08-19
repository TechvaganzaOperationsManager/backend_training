import { Router } from 'express';

export const router = Router();

 /* /api/ endpoint as every route will begin with /api/ */
router.get('/', (req, res, next)=>{ 
  res.send('Hello World');
});

/* TODO: */
// Attach Tasks Routes
// HINT: router.use('/tasks', taskRoutes);
