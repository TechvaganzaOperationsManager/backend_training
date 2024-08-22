// import { Router } from 'express';
// export const router = Router();

//  /* /api/ endpoint as every route will begin with /api/ */


/* TODO: */
// Attach Tasks Routes
// HINT: router.use('/tasks', taskRoutes);


 import { Router } from 'express';
import taskRoutes from './taskRoutes.js'; 


router.use('/tasks', taskRoutes);

export const router = Router();
