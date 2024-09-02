// Import required modules
const express = require('express');
const router = express.Router();

// Import task routes
const taskRoutes = require('./taskRoutes.js');

// Use the task routes
router.use('/', taskRoutes);

module.exports = router;
