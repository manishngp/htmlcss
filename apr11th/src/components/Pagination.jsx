import React, { useEffect } from "react";
import { useState } from "react";
import axios  from 'axios'
import '../App.css'

function Pagination(){
    const [currentPage, setCurrentPage]=useState(1);
    const [data, setData]=useState([]);

       const itemsPerPage = 5;

       const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
     
       const totalPages = Math.ceil(data.length / itemsPerPage);

    async function fetchData(){
          let res = await axios("https://fakestoreapi.com/products")
          setData(res.data);
          console.log(res.data)
    }
         useEffect(()=>{
               fetchData();
               },[])


        function handlenextP(){
            if(currentPage>=1){
                setCurrentPage(currentPage+1)
            }
        }

        function handlenextN(){
            if(currentPage<=totalPages){
                setCurrentPage(currentPage-1)
            }              
        }
         
        console.log(currentPage);


    return(
        <>
        <div style={{margin:"10px"}}>
            <button onClick={handlenextN} disabled={currentPage==1}>{'<'}</button>
            {
               [...Array(totalPages)].map((_, i) => (
                <button style={{margin:"5px"}} onClick={()=>setCurrentPage(i+1)}>
                      {i+1}
                </button>
                
           ) )}
            <button  onClick={handlenextP}  disabled={currentPage==totalPages}>{'>'}</button>
        </div>
        <div style={{marginTop:"20px"}} className="gridCards">
            {
                currentItems.map((item, index)=>(
                    <div key={index}  className="card">
                        <img  style={{height:'100px', width:'100px'}} src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </div>    
                ))
            }
        </div>
        </>
    )

}

export default Pagination;