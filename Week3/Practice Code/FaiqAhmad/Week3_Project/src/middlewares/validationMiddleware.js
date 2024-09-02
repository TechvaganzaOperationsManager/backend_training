// Middleware to validate task data
exports.validateTask = function(req, res, next)
 {
    var task = req.body;
  
    // Validate title
    if (!task.title || typeof task.title !== 'string') 
    {
      res.status(400).json({ message: 'Invalid or missing title' });
      return;
    }
  
    // Validate description
    if (!task.description || typeof task.description !== 'string')
     {
      res.status(400).json({ message: 'Invalid or missing description' });
      return;
    }
  
    // Validate status
    var validStatuses = ['pending', 'in-progress', 'completed'];
    if (!task.status || validStatuses.indexOf(task.status) === -1) 
    {
      res.status(400).json({ message: 'Invalid or missing status' });
      return;
    }
  
    // Validate priority
    var validPriorities = ['low', 'medium', 'high'];
    if (!task.priority || validPriorities.indexOf(task.priority) === -1) 
    {
      res.status(400).json({ message: 'Invalid or missing priority' });
      return;
    }
  
    next(); 
  };
  