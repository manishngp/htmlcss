import React from "react";
import { useState } from "react";

function Todo(){

    const [data, setData]=useState({task:"", priority:""});
    const [dataArr, setDataArr]=useState([]);

function handlechange(e){
   
    setData({...data, [e.target.name]:e.target.value } )
   
}

function handleSubmit(e){
    e.preventDefault();
    setDataArr([...dataArr, data]);
    console.log(dataArr);
    setData({task:"", priority:""})
    

}
function handleDelete(index){
  setDataArr(dataArr.filter((_, i)=> i != index))
}
    return(
    <>
           <h1>Todo list</h1>

           <form onSubmit={handleSubmit}>
             <input type="text" placeholder="enter task" name="task" value={data.task} onChange={handlechange} />
             <select  name="priority" value={data.priority} onChange={handlechange} >
                <option value="">select</option>
                <option value="high" > high</option>
                <option value="low"> low</option>
                <option value="medium"> low</option>
                 </select>
             {/* <input type="text" placeholder="enter priority"  name="priority" value={data.priority} onChange={handlechange} /> */}
             <input type="submit"  />
           </form>

       {
           dataArr&& dataArr.map((item,index)=>(
            <div>
             <h1>{item.task}  </h1> <h2>{item.priority}</h2>
             <button onClick={()=>{handleDelete(index)}}>Delete</button>
             </div>
           ))

          } 
      </>
    )
}
export default Todo;