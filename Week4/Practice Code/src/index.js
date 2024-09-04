import express from 'express';
import mongoose from 'mongoose';
import router from './routes/taskRouter.js';

const app = express();


mongoose.connect("mongodb://localhost/WorkDB")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/tasks', router);

const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});












//const connectDB = require("./db/connect")
//import router from './routes/index.js'; // Ensure this file exports an Express router
//import errorHandler from './Errors/errorhandlers.js';
//import { validatorTask } from './middlewares/validationMiddleware.js';
// Body parser, reading data from body into req.body
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// app.use(errorHandler);
//app.listen(PORT//,()=> console.log(`server is running on ${port}`))