import express from 'express';

export const validatorTask =  ( req , res , next ) => {
    const { title,description , status , priority } = req.body

    
if( typeof title!=='string'){
    return res.status(404).json({message:'title must be a string'})
}
if( typeof description!=='string'){
    return res.status(404).json({message:'description must be a string'})
}
const validstatus = ['pending','in-progress','complete']
if(status && !validstatus.includes(status)){
    return res.status(404).json({message:'imvalid status must be'})
}

const validpirority=['low ', 'medium', 'high']
if(priority && !validpirority.includes(priority)){
    
return  res.status(404).json({message:'invalid priority must be'})

}





}













