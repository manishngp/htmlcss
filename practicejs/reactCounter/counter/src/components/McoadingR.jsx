import React from "react";
import { useState } from "react";

function ListBox(){
      const [inputData, setInputData]=useState({FirstName:"", LastName:""})
      const [data, setData]=useState([])
      const [searchTerm, setSearchTerm]=useState("");

    function handleChange(e){
          setInputData({...inputData, [e.target.name]:e.target.value})
    }
       console.log("sterm",searchTerm)
    function handleCreate(e){
        e.preventDefault();
          setData([...data, inputData])
           setInputData({FirstName:"", LastName:""});
    }

    const filteredData= data.filter((item)=>
        `${item.FirstName} ${item.LastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    )


  console.log("inputData", inputData)
  console.log("data", data)
    return (
        <>
        <label htmlFor="sbox">Search :</label>
        <input type="text" name="sTerm" id="sbox"  onChange={(e)=>setSearchTerm(e.target.value)} />

        <div style={{display:"flex", }}>
        <div style={{border:"1px, solid black", height:"200px", width:"300px", marginTop:"20px"}}>
           {!filteredData.length && <p>no name found</p>}
            {
              filteredData.map((item, index)=>(
                    <h3 style={{marginLeft:"10px", marginTop:"2px"}} key={index}><span>{item.FirstName}  {item.LastName}</span></h3>
                ))
            }
            
        </div>

        <div style={{margin:"30px"}} >
            <form >
        <label style={{display:"block", margin:"10px"}} htmlFor="fname">First Name:</label>
        <input style={{display:"block" , margin:"10px"}} type="text" id="fname" name="FirstName"  value={inputData.FirstName} onChange={handleChange} required/>
        <label style={{display:"block" , margin:"10px"}} htmlFor="lname">Last Name:</label>
        <input  style={{display:"block" , margin:"10px"}} type="text"  id="lname"  name="LastName"  value={inputData.LastName} onChange={handleChange} />
        {/* <input type="submit" /> */}
        </form>

   
        </div>

       

        </div>
           
           <div style={{marginTop:"10px", padding:"5px"}}>
           <button onClick={handleCreate} style={{ margin:"5px"}}>Create</button>
        <button style={{ margin:"5px"}}>Update</button>
        <button style={{ margin:"5px"}}>Delete</button>
        <button style={{ margin:"5px"}}>Cancel</button>
           </div>
      
        </>
    )

}
export default ListBox;

// import React, { useState } from "react";

// function ListBox() {
//   const [inputData, setInputData] = useState({ FirstName: "", LastName: "" });
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   function handleChange(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   }

//   function handleCreate(e) {
//     e.preventDefault();
//    // if (inputData.FirstName.trim() === "" && inputData.LastName.trim() === "") return;
//     setData([...data, inputData]);
//     setInputData({ FirstName: "", LastName: "" });
//   }

//   function handleUpdate() {
//     if (editIndex !== null) {
//       const updated = [...data];
//       updated[editIndex] = inputData;
//       setData(updated);
//       setInputData({ FirstName: "", LastName: "" });
//       setEditIndex(null);
//     }
//   }

//   function handleDelete() {
//     if (editIndex !== null) {
//       const filtered = data.filter((_, idx) => idx !== editIndex);
//       setData(filtered);
//       setInputData({ FirstName: "", LastName: "" });
//       setEditIndex(null);
//     }
//   }

//   function handleCancel() {
//     setInputData({ FirstName: "", LastName: "" });
//     setEditIndex(null);
//   }

//   function handleItemClick(index) {
//     setInputData(data[index]);
//     setEditIndex(index);
//   }

//   const filteredData = data.filter((item) =>
//     `${item.FirstName} ${item.LastName}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   console.log("fil",filteredData);

//   return (
//     <>
//       <label htmlFor="sbox">Search :</label>
//       <input
//         type="text"
//         name="sTerm"
//         id="sbox"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             border: "1px solid black",
//             height: "200px",
//             width: "300px",
//             marginTop: "20px",
//             overflowY: "auto",
//           }}
//         >
//           {filteredData.map((item, index) => (
//             <h3
//               style={{ marginLeft: "10px", marginTop: "2px", cursor: "pointer" }}
//               key={index}
//               onClick={() => handleItemClick(index)}
//             >
//               <span>
//                 {item.FirstName} {item.LastName}
//               </span>
//             </h3>
//           ))}
//         </div>

//         <div style={{ margin: "30px" }}>
//           <form>
//             <label style={{ display: "block", margin: "10px" }} htmlFor="fname">
//               First Name:
//             </label>
//             <input
//               style={{ display: "block", margin: "10px" }}
//               type="text"
//               id="fname"
//               name="FirstName"
//               value={inputData.FirstName}
//               onChange={handleChange}
//               required
//             />
//             <label style={{ display: "block", margin: "10px" }} htmlFor="lname">
//               Last Name:
//             </label>
//             <input
//               style={{ display: "block", margin: "10px" }}
//               type="text"
//               id="lname"
//               name="LastName"
//               value={inputData.LastName}
//               onChange={handleChange}
//             />
//           </form>
//         </div>
//       </div>

//       <div style={{ marginTop: "10px", padding: "5px" }}>
//         <button onClick={handleCreate} style={{ margin: "5px" }}>
//           Create
//         </button>
//         <button onClick={handleUpdate} style={{ margin: "5px" }}>
//           Update
//         </button>
//         <button onClick={handleDelete} style={{ margin: "5px" }}>
//           Delete
//         </button>
//         <button onClick={handleCancel} style={{ margin: "5px" }}>
//           Cancel
//         </button>
//       </div>
//     </>
//   );
// }

// export default ListBox;
