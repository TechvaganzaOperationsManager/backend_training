import fs  from 'fs';
import path from 'path';


const definepath = path.resolve('src/data/tasks.json')

const readTask = () =>{
    try {
        
        const data = fs.readFileSync(definepath, 'utf-8');
        return  JSON.parse(data);
        
    } catch (error) {
        throw new Error("Couldn't read file " )
    }
}

const writeTask = (tasks) =>{
    try {
        fs.writeFileSync(definepath ,JSON.stringify(tasks));
    } catch (error) {
throw new Error ("Error writing")      
    }
}

export const getTasks = ( req, res) => {
    try {
        let  tasks = readTask()
        return res.send(tasks);
    } catch (error) {
    return res.status(500).send({ message: error.message})     
    }
}


export const getTaskById = (req, res) => {
    try {
        const tasks = readTask();
        const taskId = Number(req.params.id);
        const task = tasks.find(t => t.id === taskId);
if (!task) {
    return res.status(404).send({ message:`task with id ${taskId} not found` });}
    return res.send(task);
    } catch (error) {
        return res.status(500).send({message : error.message});
    }
        
    };



export const delTaskById = (req, res) => {
try {
    const tasks = readTask();
    const  taskId = Number(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if(!task){
        return res.status(404).send({message:` task with id ${taskId} not found `})
    }
    const taskFilter= tasks.filter(t => t.id !== taskId)
    writeTask(taskFilter)
    return res.send(taskFilter);  
} catch (error) {
    return res.status(500).send({message: error.message})
}}

export const createTask = (req, res) => {
    try {
        const tasks = readTask(); 
        const newtasks = {   
            id: tasks.length + 1,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString  (),
            due_date: req.body.due_date,
            assigned_to: req.body.assigned_to
        }; 
        tasks.push(newtasks); 
        writeTask(tasks); 
        return res.send(tasks); 
    } catch (error) {
        res.status(500).send({ message: error.message  });
    }
};


export const updateTask = (req, res) => {
    try {
        const tasks = readTask(); 
        const updateTaskId = Number(req.params.id); 
        const task = tasks.find(t => t.id === updateTaskId); 
        if (!task) {
            return res.status(404).send({ message: "Task not found" });
        }
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        task.priority = req.body.priority || task.priority;
        task.assigned_to=req.body.assigned_to || task.assigned_to;  
        task.created_at = new Date ().toISOString()|| task.created_at;
        task.updated_at = new Date().toISOString() || task.updated_at;
        task.due_date = req.body.due_date || task.due_date;
        writeTask(tasks); 
        return res.send(task);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message}); 
    }
};

