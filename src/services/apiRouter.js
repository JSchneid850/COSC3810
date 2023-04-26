const express = require('express');
const router = express.Router();


const { getAssignment, addAssignment, listAssignment } = require('./assignmentService');
const { getPost, addPost, listPost } = require('./postService');

router.post('/assignment', addAssignment);
router.get('/assignment/list', listAssignment);
router.get('/assignment/:id', getAssignment);

router.post('/post', addPost);
router.get('/post/list', listPost);
router.get('/post/:id', getPost);

module.exports = router;