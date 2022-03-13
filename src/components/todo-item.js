import React from 'react';
import { useDispatch } from "react-redux";
import { removeTodo, markTodoDone } from "../actions/todos";



const TodoItem = ({ id, title, isDone }) => {
    const dispatch= useDispatch();

    const handleMarkTodo = (e) => {
      dispatch(
        markTodoDone({
          id,
          title,
          isDone: e.target.checked
      })
    )
    }


  return(
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={ handleMarkTodo } />
            <label htmlFor="flexCheckDefault">
                {title}
            </label>

        </div>
        <button className="btn btn-danger" onClick={() => dispatch(removeTodo(id))}>Remove</button>
    </li>
  )
}


export default TodoItem;
