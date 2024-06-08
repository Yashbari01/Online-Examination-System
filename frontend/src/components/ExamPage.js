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
<div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="p-8">
        {score !== null ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mt-8">Your score is: {score}</h2>
            <p className="text-lg text-gray-700 mt-4">Thank you for taking the exam!</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold text-blue-900 mb-8">{exam.title}</h1>
            <p className="text-lg text-gray-700 mb-8">{exam.description}</p>
            {exam.questions && exam.questions.map((question, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{question.questionText}</h3>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optionIndex}
                      onChange={() => handleChange(index, optionIndex)}
                      className="mr-2"
                    />
                    <label className="text-lg text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            ))}
            <button onClick={submitExam} className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700">Submit</button>
          </>
        )}
      </div>
    </div>
  </div>
</div>
  );
}

export default ExamPage;