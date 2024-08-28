import exp from 'constants';
import fs, { read, write } from 'fs';
import path from 'path';

const definepath = path.resolve('src/data/tasks.json')

const readTask = () =>{
    try {
        
        const data = fs.readFileSync(definepath, 'utf-8');
        return JSON.parse(data);
        
    } catch (error) {
        throw new Error("Couldn't read file " + definepath)
    }

}


const writeTask = (tasks) =>{
    try {
        fs.writeFileSync(definepath ,JSON.stringify(tasks));
    } catch (error) {
throw new Error ("Error writing")
        
    }
}



export const getTasks = (req, res) => {
    try {
        const  tasks = readTask()
        //console.log(tasks);
        return res.send(tasks);
    } catch (error) {
    return res.status(404).send({message : 'could not find task'})     
    }
}


export const getTaskById = (req, res) => {
    try {
        const tasks = readTask();
        const taskId = Number(req.params.id);
        const task = tasks.find(t => t.id === taskId);
    return res.send(task);
    } catch (error) {
        return res.status(400).send({message :`couldn't find task ${taskId}`});
    }
        
    };



export const delTaskById = (req, res) => {
try {
    const tasks = readTask();
    const  taskId = Number(req.params.id);
    //const task = tasks.find(t => t.id === taskId);
    const taskFilter= tasks.filter(t => t.id !== taskId)
    writeTask(taskFilter)
    return res.send(taskFilter);  
} catch (error) {
    return res.status(400).send({message:"couldn't delete task"})
}

}


export const createTask = (req, res) => {
try {
    const tasks = readTask()
const newtasks= {
    id: tasks.length + 1, 
    title: req.body.title,
    description:req.body.description ,
    status: req.body.status,
    priority:req.body.priority ,
    created_at:req.body.created ,
    updated_at: req.body.updated_at,
    due_date:req.body.due_date ,
    assigned_to:req.body.assigned_to 
} 
tasks.push(newtasks)
writeTask(tasks)
return res.send(tasks)
} catch (error) {
 res.status(400).send({message : "couldn't create task"})   
}
}  

export const updateTask = (req, res) => {
    try {
        const tasks = readTask(); 
        const updateTaskId = Number(req.params.id); 
        const task = tasks.find(t => t.id === updateTaskId); 
            task.title = req.body.title 
           // task.description = req.body.description  
            //task.status = req.body.status 
            writeTask(tasks); 
            return res.send(task);
        
        }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Unable to update task" }); 
    }
};
