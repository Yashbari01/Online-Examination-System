const Exam = require('../models/Exam');

const createExam = async (req, res) => {
  const { title, description, questions } = req.body;
  const exam = new Exam({
    title,
    description,
    questions,
    createdBy: req.user._id,
  });

  const createdExam = await exam.save();
  res.status(201).json(createdExam);
};

const getExams = async (req, res) => {
  const exams = await Exam.find({});
  res.json(exams);
};

const getExamById = async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (exam) {
    res.json(exam);
  } else {
    res.status(404);
    throw new Error('Exam not found');
  }
};

module.exports = { createExam, getExams, getExamById };
