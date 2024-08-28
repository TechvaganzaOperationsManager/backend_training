export const validateTask = (req, res, next) => {
    const { title, description, status, priority } = req.body;
    const validStatuses = ['pending', 'in-progress', 'completed'];
    const validPriorities = ['low', 'medium', 'high'];
    
    if (title === undefined) {
      return res.status(400).json({ msg: 'Title is required.' });
    }
    if (typeof title !== 'string') {
      return res.status(400).json({ msg: 'Title must be a string.' });
    }
  
    if (description === undefined) {
      return res.status(400).json({ msg: 'Description is required.' });
    }
    if (typeof description !== 'string') {
      return res.status(400).json({ msg: 'Description must be a string.' });
    }
    
    if (status === undefined) {
      return res.status(400).json({ msg: 'Status is required.' });
    }
    if (typeof status !== 'string') {
      return res.status(400).json({ msg: 'Status must be a string.' });
    }
    
    if (priority === undefined) {
      return res.status(400).json({ msg: 'Priority is required.' });
    }
    if (typeof priority !== 'string') {
      return res.status(400).json({ msg: 'Priority must be a string.' });
    }
  
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ msg: 'Status must be one of: pending, in-progress, completed.' });
    }
  
    if (!validPriorities.includes(priority)) {
      return res.status(400).json({ msg: 'Priority must be one of: low, medium, high.' });
    }
  
    next();
  };
  

  // export const validateTask = (req, res, next) => {
//     const {status, priority, title, description} = req.body;

//     if (status === undefined || !['pending', 'in-progress', 'completed'].includes(status)) {
//         return res.status(400).json({ message: 'Invalid status' });
//     }

//     if (priority === undefined || !['low', 'medium', 'high'].includes(priority)) {
//         return res.status(400).json({ message: 'Invalid priority' });
//     }
//     if (typeof title !== 'string') {
//         return res.status(400).json({ message: 'Title is required' });
//     }
    
//     if (typeof description !== 'string') {
//         return res.status(400).json({ message: 'Description is required ' });
//     }
    
//     next();
// };

