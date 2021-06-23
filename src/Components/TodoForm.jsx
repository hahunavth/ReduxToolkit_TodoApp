import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/Reducer/todoSlice";
import {Form, Button} from 'react-bootstrap'

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
    <Form className="TodoForm" onSubmit={handleAddTodo}>
      <Form.Group controlId="formTodo">
      <Form.Label>Add Todo: </Form.Label>
      <Form.Control type="text" onChange={handleChange} value={title} />
      <Form.Text className="text-muted">
        { /* We'll never share your email with anyone else. */}
      </Form.Text>
      </Form.Group>
      <Button variant="primary mt-2 mb-2"  type="submit"> Submit </Button>
    </Form>
  );
}

export default TodoForm;
