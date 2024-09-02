// Import the tasks data
const tasks = require('../data/tasks.json');
const fs = require('fs');
const path = require('path');

// Function to Write Tasks To Jsons File
function writeTasksToFile(tasks) 
{
  fs.writeFileSync(
    path.join(__dirname, '../data/tasks.json'),
    JSON.stringify(tasks, null, 2)
  );
}

//To Get All Taska
exports.getAllTasks = (req, res) => 
{
    res.json(tasks);
  };

//Get Tasks by Id
// Get a task by ID
exports.getTaskById = function(req, res) 
{
    
    var taskId = parseInt(req.params.id); 
    var task = null;
    //Iterate Through Task Object
    for (var i = 0; i < tasks.length; i++) 
    {
      if (tasks[i].id === taskId) 
      {
        task = tasks[i];
        break;
      }
    }
    // If the task is not found, send a 404 error response
    if (!task) 
    {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
  
    
    res.json(task);
  };
  
// Create a new task
exports.createTask = (req, res) =>
 {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    created_at: new Date(),
    updated_at: new Date()
  };

  tasks.push(newTask);
  writeTasksToFile(tasks);
  res.status(201).json(newTask);
};


// Function to find a task by ID
function findTaskById(id) {
  return tasks.find(t => t.id === parseInt(id));
}

// Function to find the index of a task by ID
function findTaskIndexById(id) {
  return tasks.findIndex(t => t.id === parseInt(id));
}

// Delete a task by ID
exports.deleteTask = (req, res) =>
 {
  const taskIndex = findTaskIndexById(req.params.id); 

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1); 
  writeTasksToFile(tasks); 
  res.status(204).end(); 
};


// Update a task by ID
exports.updateTask = (req, res) => {
  const task = findTaskById(req.params.id); // Use filter function to find the task

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  
  Object.assign(task, {
    ...task, 
    ...req.body, 
    updated_at: new Date()
  });

  writeTasksToFile(tasks); // Save updated tasks array
  res.json(task); // Return updated task
};
