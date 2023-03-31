const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false }
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = Assignment;
