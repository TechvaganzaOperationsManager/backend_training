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
  console.log(task)
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
            //id :req.body.id,
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
  export const updateTask = (req ,res) => {
    const tasks = readTasks();
    const updateTaskId = Number(req.params.id);
    const task = tasks.find(t => t.id === updateTaskId);
    // If Id is Invalid
    // If No Task Found 
    
    if(!task) {
      return res
      .status(404)
      .json({msg : `A task By this ${updateTaskId} was not Found`});
    }

    task.title = req.body.title;
    task.description = req.body.description;
    task.status = req.body.status;
    task.priority = req.body.priority;
    // Generate Updated At too.
    
    writeTasks (tasks);
    return res.send(task)
    
  }







  //   export const sendMessage = (req , res) => {
//     res.send('Hello This is me');
// };

  // export const getMessage = (req, res) => {
  //   const data = fs.readFileSync(definePath , 'utf8')
  //   const jsonData = JSON.parse(data);
  // }
 

//   export const updateTask = (req, res) => {
//     const tasks = readTasks();
//     const taskIndex = tasks.findIndex(t => t.id === req.params.id);
//     if (taskIndex === -1) {
//         return res.status(404).json({ message: 'Task not found' });
//     }
//     tasks[taskIndex] = {
//         ...tasks[taskIndex],
//         ...req.body,
//         updated_at: new Date().toISOString()
//     };
//     writeTasks(tasks);
//     res.json(tasks[taskIndex]);
// };

