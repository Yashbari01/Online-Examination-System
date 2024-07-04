// // src/components/ExamList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ExamList = () => {
//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchExams = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/api/exams');
//         setExams(response.data);
//       } catch (err) {
//         setError('Error fetching exams');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExams();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Available Exams</h2>
//       <ul>
//         {exams.map((exam) => (
//           <li key={exam._id}>
//             <h3>{exam.title}</h3>
//             <p>{exam.description}</p>
//             <p>Number of Questions: {exam.questions.length}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExamList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";

function ExamList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const { data } = await axios.get('http://localhost:7000/api/exams');
      setExams(data);
    };
    fetchExams();
  }, []);

  return (
    // <div>
    //   <h1>Available Exams</h1>
    //   <ul>
    //     {exams.map((exam) => (
    //       <li key={exam._id}>
    //         <Link to={`/exam/${exam._id}`}>{exam.title}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
<>
      {/* <HeaderPage />
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-extrabold text-green-900 mb-8">Available Exams</h1>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {exams.map((exam) => (
      <div key={exam._id} className="flex items-center p-4 bg-white rounded-lg shadow-xs hover:bg-green-800 ">
        <Link to={`/exam/${exam._id}`} className="text-lg font-medium text-green-600 hover:text-white ml-4">{exam.title}</Link>
      </div>
    ))}
  </div>
</div>
<FooterPage /> */}
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <HeaderPage />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-12 text-center">
          Available Exams
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {exams.map((exam) => (
            <Link 
              key={exam._id} 
              to={`/exam/${exam._id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {exam.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {exam.description.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center text-indigo-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {exam.duration} minutes
                  </span>
                  <span className="flex items-center text-purple-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {exam.questions.length} questions
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                <button className="w-full bg-white text-indigo-600 font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-indigo-50 hover:shadow-md">
                  Start Exam
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <FooterPage />
    </div>
</>


  );
}

export default ExamList;
