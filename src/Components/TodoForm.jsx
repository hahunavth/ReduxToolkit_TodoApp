import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/Reducer/todoSlice";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handleAddTodo(event) {
    event.preventDefault();

    dispatch(addTodo(title));
    setTitle("");
  }

  return (
    <form className="TodoForm" onSubmit={handleAddTodo}>
      <label>Add Todo: </label>
      <input type="text" onChange={handleChange} value={title} />
      <input type="submit" />
    </form>
  );
}

export default TodoForm;
