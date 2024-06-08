const express = require('express');
const { createExam, getExams, getExamById } = require('../controllers/examController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createExam).get(getExams);
router.route('/:id').get(getExamById);

module.exports = router;
