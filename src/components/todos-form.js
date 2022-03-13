import React from 'react';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../actions/todos";


const TodosForm = () => {
  const inputRef = useRef(null);
  const formRef= useRef(null);
  const dispatch= useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      title: inputRef.current.value,
      id: v4(),
      isDone: false,
    }));

    formRef.current.reset();
  }

    return(
      <div className="card-body">
          <form className="mb-3 d-flex justify-content-between align-items-center"
            onSubmit={handleSubmit} ref={formRef}>
            <div>
                <input
                ref={inputRef}
                 type="text"
                 className="form-control"
                 id="exampleFormControlInput1"
                 placeholder="e.g. Buy eggs" />
            </div>
                <button className="btn btn-success">Add</button>
          </form>

      </div>
    )
}

export default TodosForm;
