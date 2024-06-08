const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: Number, required: true },
});

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [questionSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
