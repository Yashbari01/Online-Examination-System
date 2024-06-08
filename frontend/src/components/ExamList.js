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
      <HeaderPage />
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
<FooterPage />
</>
  );
}

export default ExamList;
