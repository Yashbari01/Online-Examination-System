import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ExamPage() {
  const { id } = useParams();
  const [exam, setExam] = useState({});
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchExam = async () => {
      const { data } = await axios.get(`http://localhost:7000/api/exams/${id}`);
      setExam(data);
    };
    fetchExam();
  }, [id]);

  const submitExam = () => {
    let calculatedScore = 0;
    exam.questions.forEach((question, index) => {
      if (question.correctOption === answers[index]) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  const handleChange = (questionIndex, optionIndex) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  return (
<>
<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {score !== null ? (
              <div className="text-center py-16">
                <h2 className="text-5xl font-bold text-indigo-900 mb-6">Your Score: {score}</h2>
                <p className="text-2xl text-gray-700 mb-10">Thank you for completing the exam!</p>
                <button 
                  onClick={() => window.location.href='/exam'} 
                  className="mt-8 py-3 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  Back to Exams
                </button>
              </div>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">{exam.title}</h1>
                <p className="text-xl text-gray-700 mb-10">{exam.description}</p>
                <form onSubmit={(e) => { e.preventDefault(); submitExam(); }}>
                  {exam.questions && exam.questions.map((question, index) => (
                    <div key={index} className="mb-10 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-md">
                      <h3 className="text-2xl font-bold text-indigo-900 mb-6">
                        Question {index + 1}: {question.questionText}
                      </h3>
                      <div className="space-y-4">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white transition duration-200 ease-in-out cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={optionIndex}
                              onChange={() => handleChange(index, optionIndex)}
                              className="form-radio h-6 w-6 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-lg text-gray-800">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="mt-12 flex justify-end">
                    <button 
                      type="submit"
                      className="py-4 px-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                      Submit Exam
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
</>
  );
}

export default ExamPage;