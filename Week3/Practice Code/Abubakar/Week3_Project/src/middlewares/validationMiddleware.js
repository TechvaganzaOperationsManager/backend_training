export const updateTaskValidator = (req, res, next) => {
  const { title, description, status, priority, assigned_to, due_date } = req.body;

  if (title !== undefined && !title.trim()) {
      return res.status(400).json({ msg: 'Title cannot be empty if provided.' });
  }

  if (description !== undefined && !description.trim()) {
      return res.status(400).json({ msg: 'Description cannot be empty if provided.' });
  }

  if (status !== undefined && !['pending', 'in-progress', 'completed'].includes(status)) {
      return res.status(400).json({ msg: 'Invalid status value. Must be "pending", "in-progress", or "completed".' });
  }

  if (priority !== undefined && !['low', 'medium', 'high'].includes(priority)) {
      return res.status(400).json({ msg: 'Invalid priority value. Must be "low", "medium", or "high".' });
  }

  if (assigned_to !== undefined && !assigned_to.trim()) {
      return res.status(400).json({ msg: 'Assigned to cannot be empty if provided.' });
  }

  if (due_date !== undefined && isNaN(Date.parse(due_date))) {
      return res.status(400).json({ msg: 'Due date must be a valid date if provided.' });
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


export const validateTask = (req, res, next) => {
  const { title, description, status, priority, assigned_to, due_date } = req.body;
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

  if (assigned_to === undefined) {
      return res.status(400).json({ msg: 'Assigned to is required.' });
  }
  if (typeof assigned_to !== 'string') {
      return res.status(400).json({ msg: 'Assigned to must be a string.' });
  }

  if (due_date === undefined) {
      return res.status(400).json({ msg: 'Due date is required.' });
  }
  if (isNaN(Date.parse(due_date))) {
      return res.status(400).json({ msg: 'Due date must be a valid date.' });
  }

  next();
};
