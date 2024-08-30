export const validatorTask = (req, res, next) => {
    const { title, description, status, priority } = req.body;

    if ( title === undefined){
        return res.status(400).json({msg : "title is required"})
    }
    if (typeof title !== "string") {
        return res.status(400).json({ message: "Title must be a string" });
    }
    if(description === undefined){
        return res.status(404).json({message: "Description is required"})
    }
    if (typeof description !== 'string') {
        return res.status(400).json({ message: 'Description must be a string' });
    }

    const validStatus = ['pending', 'in-progress', 'complete'];
    if(validStatus===undefined){
        res.status(400).json({ message: 'staus is required' });
    }
    if (status && !validStatus.includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Must be one of: pending, in-progress, complete' });
    }

    const validPriority = ['low', 'medium', 'high'];
    if(priority===undefined){
        res.status(400).json({ message: 'priority is required' });
    }
    if (priority && !validPriority.includes(priority)) {
        return res.status(400).json({ message: 'Invalid priority. Must be one of: low, medium, high' });
    }

    next(); 
};


 export const  updateValidatuion = (req, res, next) => {
    const { title, description, status, priority } = req.body;
    if (typeof title !== "string") {
        return res.status(400).json({ message: "Title must be a string" });
    }
    if (description !== undefined && typeof description !== 'string') {
        return res.status(400).json({ message: 'Description must be a string' });
    }
    const validStatus = ['pending', 'in-progress', 'complete'];
    if(validStatus===undefined){
        res.status(400).json({ message: 'staus is required' });
    }
    if (status && !validStatus.includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Must be one of: pending, in-progress, complete' });
    }
    const validPriority = ['low', 'medium', 'high'];
    if (priority !== undefined && !validPriority.includes(priority)) {
        return res.status(400).json({ message: 'Invalid priority. Must be one of: low, medium, high' });
    }

    next(); // If all checks pass, proceed to the next middleware or route handler
};

