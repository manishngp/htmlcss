import React  from "react";
import { useReducer } from "react";


const initialState = {
  todos: [],
  inputTodo: { task: "", isCompleted: false },

};

const reducer = (state, action) => {
  switch (action.type) {
   
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, { task: state.inputTodo.task, isCompleted: false }],
        inputTodo: { task: "", isCompleted: false },
      };
    case "toggleComplete":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };
    case "removeTodo":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.index),
      };
    case "updateInput":
      return {
        ...state,
        inputTodo: { ...state.inputTodo, task: action.payload },
      };
    default:
      return state;
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "updateInput", payload: e.target.value });
  };

  return (
    <>
     
      <div>
        <input
          type="text"
          value={state.inputTodo.task}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={() => dispatch({ type: "addTodo" })}>Add Task</button>
      </div>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.isCompleted ? "none": "none" }}
            >
              {todo.task}
            </span>
            <button onClick={() => dispatch({ type: "toggleComplete", index })}>
              {todo.isCompleted ? "pending" : "Complete"}
            </button>
            <button onClick={() => dispatch({ type: "removeTodo", index })}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Reducer;
