import express from 'express';
import { errorHandler } from './errors/errorHandler.js';
import router from './routes/index.js'; 
// Create an Express application
const app = express();


const port = process.env.PORT || 3000;


app.use(express.json({ limit: '10kb' }));


app.use(express.urlencoded({ extended: true, limit: '10kb' }));

/* TODO: */
// 1. Register routes here. Make sure all the requests start with /api e.g., GET http://localhost:3000/api/tasks/ 
// HINT: router (./routes/index.js) will be used.
app.use('/api', router);

// 2. Start the server on the port defined above
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// BONUS TASK: (Do it at the end for practice) register Error handling middleware
app.use(errorHandler); // Error handling middleware registered here
