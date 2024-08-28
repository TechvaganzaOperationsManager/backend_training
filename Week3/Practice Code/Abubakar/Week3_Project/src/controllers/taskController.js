import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const definePath = path.resolve('src/data/tasks.json');

//Read from file
const readTasks = () => {
  try {
    const data = fs.readFileSync(definePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Failed to read tasks from file.');
  }
};

//Write in  file
const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(definePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    throw new Error('Failed to write tasks to file.');
  }
};

//Get All Tasks
export const getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();

    if (!tasks) {
      return res.status(404).send({ message: 'No tasks found' });
    }

    res.send(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
  
  // Get Task By Id
  export const TaskById = (req , res) => {
    try {
      const tasks = readTasks();
  // console.log(req.params.id);
  // console.log(typeof req.params.id);
  // console.log(tasks.map(e=>e.id), req.params.id);
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if(!task) {
    return res.status(404).json({msg : `Task with ID ${taskId} was not found`});
  }

  res.send(task);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

 // Delete Task By Id
  export const deleteTaskById = (req, res) => {
    try {
      const tasks = readTasks();
      const taskId = Number(req.params.id);
      const task = tasks.find(t => t.id === taskId);

      if(!task) {
        return res
        .status(404)
        .json({msg : `Task with ID ${taskId} does not Exist. Plz Enter a Valid Id to Delete`});
      }
      
      // console.log(taskId, "taskId")
      // const task = tasks.find(t => t.id === taskId);
      const filteredTask  = tasks.filter(t => t.id !==taskId);
      writeTasks(filteredTask);
       return res.send(filteredTask);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  // Create New Task And give New Id
    export const createTask = (req, res) => {
     try {
        const tasks = readTasks();
        const newTask = {
            //id: uuidv4(),
            id :req.body.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            created_at: new Date().toISOString(), 
            updated_at: new Date().toISOString(), 
            due_date: req.body.due_date, 
            assigned_to: req.body.assigned_to 
        };
        tasks.push(newTask);
        writeTasks(tasks);
        res.json(newTask);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
  };
  
  // Update Task By Id
  export const updateTask = (req, res) => {
    const tasks = readTasks();
    const updateTaskId = Number(req.params.id);
    let task = tasks.find(t => t.id === updateTaskId);

    if (!task) {
    return res
    .status(404)
    .json({ msg: `Task with this ID ${updateTaskId} does not exist. Please enter a valid ID to update.` });
    }

   
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.priority = req.body.priority || task.priority;
    task.assigned_to = req.body.assigned_to || task.assigned_to;


//  task = { ...task, ...req.body, id: task.id };
    task.updated_at = new Date().toISOString();
    
    try {
        writeTasks(tasks);
        return res.send(task);
    } catch (error) {
        console.error('Error writing tasks to file:', error);
        return res.status(500).json({ msg: 'Error updating task' });
    }
};
