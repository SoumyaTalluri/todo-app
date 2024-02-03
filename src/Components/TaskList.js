// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import TaskForm from './TaskForm';

// function TaskList() {
//   const [tasks, setTasks] = useState([]);
 

//   useEffect(() => {
//     getTasks();
//   }, []);

//   const getTasks = async () => {
//     try {
//       const response = await fetch('http://localhost:4200/task', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setTasks(data);
//       } else {
//         console.error('Failed to fetch tasks');
//       }
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const headers = tasks.length > 0 ? Object.keys(tasks[0]) : [];
//   const excludedColumns = ['_id', 'id'];

 

//   const formatDate = (dateString, key) => {
//     if (['dueDate', 'reminders', 'updatedAt', 'createdAt'].includes(key)) {
//       const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
//       return new Date(dateString).toLocaleDateString(undefined, options);
//     }
//     return dateString;
//   };

//   return (
//     <div>
//       <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             {headers
//               .filter((key) => !excludedColumns.includes(key))
//               .map((key) => (
//                 <th key={key} style={{ border: '1px solid black', padding: '8px' }}>
//                   {key}
//                 </th>
//               ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task) => (
//             <tr key={task._id}>
//               {headers
//                 .filter((key) => !excludedColumns.includes(key))
//                 .map((key) => (
//                   <td key={`${task._id}-${key}`} style={{ border: '1px solid black', padding: '8px' }}>
//                      {formatDate(task[key], key)}
//                   </td>
//                 ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Link to="/taskForm">
//         <button type="button">Add new Task</button>
//       </Link>
//     </div>
//   );
// }

// export default TaskList;
function TaskList(){
  
return(
  <div>

  </div>
)
}
export default TaskList;