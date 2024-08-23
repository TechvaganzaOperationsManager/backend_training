export const validateTask = (req, res, next) => {
    const {status, priority, title, description} = req.body;

    if (status !== undefined && !['pending', 'in-progress', 'completed'].includes(status)) {
        return res.status(400).json({ msg: 'Invalid status' });
    }

    if (priority !== undefined && !['low', 'medium', 'high'].includes(priority)) {
        return res.status(400).json({ msg: 'Invalid priority' });
    }
    if (typeof title !== 'string' && title !== undefined) {
        return res.status(400).json({ message: 'Invalid title' });
    }
    
    if (typeof description !== 'string' && description !== undefined) {
        return res.status(400).json({ message: 'Invalid description' });
    }
    
    next();
};



