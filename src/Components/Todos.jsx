import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTodo , todosSelector,removeTodos, removeTodo, markComplete} from '../Store/Reducer/todoSlice';
import TodoItem from './TodoItem'
import {ListGroup, Button, Container, Row, Col} from 'react-bootstrap'


function Todos() {
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  const toggleIsComplete = (id) => {
    dispatch(markComplete(id))
  }

  const handleDelete = (id, e) => {
    const ret = dispatch(removeTodo(id))
		dispatch(getTodo());
    return ret;
  }

  useEffect(() => {
		// send request to jsonplaceholder
		dispatch(getTodo())
	}, [dispatch])

  return (
    <div>
      <ListGroup as='ul' variant='flush'>
        {todos.map((todo) => (
          <TodoItem todo={todo}  key={todo.id} toggleIsComplete={toggleIsComplete} handleDelete={handleDelete}/>
        ))}
      </ListGroup>
    </div>
  );
}

export default Todos;
