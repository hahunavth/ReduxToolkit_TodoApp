import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/Reducer/todoSlice";
import { Form, Button } from 'react-bootstrap'

function TodoForm() {
  const [title, setTitle] = useState("");
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  function handleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    setDisable(true);
    dispatch(addTodo(title))
    .then(() => {
      setDisable(false);
      setTitle("");
    }, () => {
      setDisable(false);
      setTitle("");
    });
  }

  return (
    <Form className="TodoForm" onSubmit={handleAddTodo}>
      <Form.Group controlId="formTodo">
      <Form.Label>Add Todo: </Form.Label>
      <Form.Control type="text" onChange={handleChange} value={title} disabled={disable}/>
      <Form.Text className="text-muted">
        { /* We'll never share your email with anyone else. */}
      </Form.Text>
      </Form.Group>
      <Button variant="primary mt-2 mb-2"  type="submit" disabled={disable}> Submit </Button>
    </Form>
  );
}

export default TodoForm;
