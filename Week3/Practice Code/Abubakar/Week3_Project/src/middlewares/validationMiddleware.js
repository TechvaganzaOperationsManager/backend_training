export const validateTask = (req, res, next) => {
    const { title , description , status, priority } = req.body;

    const validStatuses = ['pending', 'in-progress', 'completed'];
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status value' });
    }
   
    const validatePriority = ['low', 'medium', 'high'];
    if (priority && !validatePriority.includes(priority)) {
        return res.status(400).json({ error: 'Invalid priority value' });
    }

    if (typeof title !== 'string') {
        return res.status(400).json({ message: 'Invalid title' });
    }
    
    if (typeof description !== 'string') {
        return res.status(400).json({ message: 'Invalid description' });
    }
    


    next();
};



