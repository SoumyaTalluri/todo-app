// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const WalmartData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     handleResponse();
//   }, []);

//   const handleResponse = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Check if data is empty or undefined
//   if (!data || data.length === 0) {
//     return <p>Loading...</p>;
//   }

//   const keysArr = Object.keys(data[0].address);

//   return (
//     <div>
//       <p>Hello</p>
//       <table>
//         <thead>
//           <tr>
//             {keysArr.map((k) => (
//               <th key={k}>{k === 'geo' ? 'lat lng' : k}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               {keysArr.map((k) => (
//                 <td key={k}>
//                   {k === 'geo' ? `${item.address.geo.lat}, ${item.address.geo.lng}` : item.address[k]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// export default WalmartData;
