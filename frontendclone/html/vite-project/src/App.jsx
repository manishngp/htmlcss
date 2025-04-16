import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// import { useEffect, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [serchTerm, setSerchTerm] = useState("");
//   const [click, setClick] = useState("");
//   const [currentPage, setcurrentPage] = useState(1);

//   async function fetchData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setPosts(data));
//   }
//   const handleSearch = (e) => {
//     setSerchTerm(e.target.value);
//     console.log(serchTerm);
//   };
//   console.log(serchTerm);

//   const serch = () => {
//     setClick(serchTerm.toLowerCase());
//   };

//   const filteredData = posts.filter((post) =>
//     post.title.toLowerCase().includes(click)
//   );

//   const itemsPerPage = 5;

//   let indexOfLastItem = currentPage * itemsPerPage;
//   let indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   let pageFive = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // const itemsPerPage = 5;

//   // let indexOfLastItem = currentPage * itemsPerPage;
//   // let indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // let pageFive = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         name="serchTerm"
//         value={serchTerm}
//         onChange={handleSearch}
//       />
//       <button onClick={serch}>search</button>

//       <table>
//         <thead>
//           <tr>
//             <th>List of Posts</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pageFive.map((item) => (
//             <>
//               <tr>
//                 <td>{item.title}</td>
//               </tr>
//             </>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
