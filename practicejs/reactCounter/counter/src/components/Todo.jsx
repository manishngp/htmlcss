import React from "react";
import { useState} from "react";

function Todo(){
    const [inputData, setInputData]= useState({task:"", priority:""});
    const [data, setData]=useState([]);


    function handleChange(e){
        setInputData({...inputData, [e.target.name] :e.target.value})

    }
    
    function handleSubmit(e){
        e.preventDefault();
        setData([...data, inputData])
        setInputData({task:"", priority:""});

    }
    // console.log("inputData",inputData)
    console.log("data", data)


    // useEffect(()=>{
        
    // },[data])

    function handleDelete(index){
        setData(prevData => prevData.filter((_, i)=> i != index))
        // setData(prevData=>prevData.filter((_, i)=> i!=index))
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <input type="text" name="task" placeholder="Enter Task" value={inputData.task} onChange={handleChange}  required/>
            {/* <input type="text" name="priority" placeholder="Enter Priority" value={inputData.priority} onChange={handleChange}  required/> */}
            <select  name="priority"  value={inputData.priority} onChange={handleChange}  >
                <option>Select Priority</option>

                <option >High
                    </option>
                    <option  >Low
                    </option>
            </select>

            <input type="submit"   />
        </form>

        {/* <table style={{border:"1px"}}>
            <thead>
                <tr><th>Task</th> | <th>Priority</th> | <th>Delete</th></tr>
            </thead>
            <tbody>
                
            
         {
            data.map((item, index)=>(
                <tr key={index}>
                <td>{item.task}</td>
                <td>{item.priority}</td>
                <td><button onClick={()=>{handleDelete(index)}}>delete</button></td>

                </tr>
            ))
        } 
               </tbody>
          </table> */}

<table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
  <thead>
    <tr >
      <th>Task</th>
      <th style={{ border: "1px solid black",  }}>Priority</th>
      <th style={{ border: "1px solid black",  }}>Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item, index) => (
        <tr style={{textAlign:"center"}} key={index}>
          <td style={{ border: "1px solid black", }}>{item.task}</td>
          <td style={{ border: "1px solid black",  }}>{item.priority}</td>
          <td style={{ border: "1px solid black", }}>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>

        </>
    )

}

export default Todo;