const express = require('express');
const router = express.Router();


const { getAssignment, updateAssignment, delAssignment, addAssignment, listAssignment } = require('./assignmentService');

router.post('/assignment', addAssignment);
router.get('/assignment/list', listAssignment);
router.get('/assignment/:id', getAssignment);
router.put('/assignment/:id', updateAssignment);
router.delete('/assignment/:id', delAssignment);

module.exports = router;