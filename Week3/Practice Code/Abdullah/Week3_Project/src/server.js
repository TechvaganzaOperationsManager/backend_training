import express from 'express';
import router from './routes/index.js'; // Ensure this file exports an Express router
import errorHandler from './Errors/errorhandlers.js';
const app = express();
const port = process.env.PORT || 3100; 

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api', router)
app.use(errorHandler);
app.listen(port,()=> console.log(`server is running on ${port}`))
//import taskcontroller from '../controllers/taskcontroller.js';

 //import { handler } from './errors/errorHandler.js'; // Corrected the path to match the case-sensitive file structure

/* TODO: */
// 1. Register routes here. Make sure all the requests starts with /api e-g GET http://localhost:3000/api/tasks/ HINT: router (./routes/index.js) will be used.
// 2. Start the server on the port defined above




