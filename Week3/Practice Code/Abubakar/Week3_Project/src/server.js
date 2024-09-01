//import express from 'express';
// import { handler } from './errors/errorHandler.js'; // Corrected the path to match the case-sensitive file structure
// import router from './routes/index.js'; // Ensure this file exports an Express router

//const app = express();
//const port = process.env.PORT || 3000; // Default port or environment variable

// Body parser, reading data from body into req.body
//app.use(express.json({ limit: '10kb' }));
//app.use(express.urlencoded({ extended: true, limit: '10kb' }));

/* TODO: */
// 1. Register routes here. Make sure all the requests starts with /api e-g GET http://localhost:3000/api/tasks/ HINT: router (./routes/index.js) will be used.
// 2. Start the server on the port defined above
// BONUS TASK: (Do it at the end for practice) register Error handling middleware

import express from 'express';
//import errorHandler from './errors/errorHandler.js';
import allRoutes from './routes/index.js';

const app = express();

const PORT =  3000;

app.use(express.json());
//app.use(errorHandler);
app.use('/api', allRoutes);


// Error Route
app.use('/*', (req, res)=>{
  res.status(404).send({ msg: "Route Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});