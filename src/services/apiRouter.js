const express = require('express');
const router = express.Router();

// Require your API functions here
const { getAssignment, updateAssignment, delAssignment, addAssignment, listAssignment } = require('./assignmentService');

// Define your routes here
//make list assignment call

router.post('/assignment', addAssignment);
router.get('/assignment', listAssignment);
router.get('/assignment/:id', getAssignment);
router.put('/assignment/:id', updateAssignment);
router.delete('/assignment/:id', delAssignment);

module.exports = router;