import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTodo , todosSelector,removeTodos, removeTodo, markComplete} from '../Store/Reducer/todoSlice';
import {ListGroup, Button, Container, Row, Col} from 'react-bootstrap'


function Todos() {
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  const toggleIsComplete = (id) => {
    dispatch(markComplete(id))
  }

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
		dispatch(getTodo());
  }

  useEffect(() => {
		// send request to jsonplaceholder
		dispatch(getTodo())
	}, [dispatch])

  return (
    <div>
      <ListGroup as='ul' variant='flush'>
        {todos.map((todo) => (
          <ListGroup.Item as='li' key={todo.id} className="Todos-item">
            <Container>
            <Row>
              <Col>
                {todo.title}
              </Col>
              <Col xs lg="1"  md="auto">
                <input key={todo.id} 
                type="checkbox" 
                checked={todo.isComplete} 
                onChange={toggleIsComplete.bind(this, todo.id)}/>
              </Col>
              <Col xs lg="1">
                <Button variant='danger' onClick={handleDelete.bind(this, todo.id)}>
                  Delete
                </Button>
              </Col>
            </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Todos;
