const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  class: { type: String, required: true },
  title: { type: String, required: true },
  data : { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  time : { type: String, required: true}
});

const PostSchema = new mongoose.Schema({
  class: { type: String, required: true },
  title: { type: String, required: true },
  post : { type: String, required: true },
  time : { type: String, required: true },  
});
const post = mongoose.model('Post', PostSchema);
const assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports = {post, assignment}
