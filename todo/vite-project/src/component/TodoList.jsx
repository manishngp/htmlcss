import React from 'react'
import { useState } from 'react';

function TodoList() {


    const [Todo, setTodo] = useState("");
    const [Todos, setTodos] = useState([]);
  
    function addTodo(){
      if(Todo.trim() === "") return;

      setTodos([...Todos, { id: Date.now(), 
        text : Todo,
        completed : false
      }]);

      setTodo("");
    }
    function toggleTodo(id){
            setTodos(
      Todos.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
    }
    
  
    function deleteTodo(id){
      setTodos(Todos.filter((ele)=> ele.id != id))

    }
  return (
    <div>
      <input type="text"
      placeholder="new todo"
      value={Todo}
      onChange={(e)=>setTodo(e.target.value)}
      />


      <button onClick={addTodo}>add</button>

    
    <div>
        {
       
          Todos.map((ele)=>(
            <div key={ele.id}>
              <h2>{ele.text}</h2>
            <button onClick={()=> toggleTodo(ele.id)}>{ele.completed?"completed": "Not completed"}</button>
            <button onClick={()=>deleteTodo(ele.id)}>delete</button>
            </div>
          )

          )
       

      }
    </div>

    </div>
  )
}

export default TodoList;