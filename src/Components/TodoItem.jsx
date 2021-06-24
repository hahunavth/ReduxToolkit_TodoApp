import React, {useState} from 'react';
import {ListGroup, Button, Container, Row, Col} from 'react-bootstrap'


const TodoItem = (props) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handleDeleteBtn = (id, e) => {
        setIsDisabled(true);
        props.handleDelete(id, e)
        .then(
            () => {}, 
            () => {
            setIsDisabled(false);
        })
    }

    return (
          <ListGroup.Item as='li' className="Todos-item" disabled={isDisabled}>
            <Container>
            <Row>
              <Col>
                {props.todo.title}
              </Col>
              <Col xs lg="1"  md="auto">
                <input key={props.todo.id} 
                type="checkbox" 
                checked={props.todo.isComplete} 
                onChange={props.toggleIsComplete.bind(this, props.todo.id)}
                disabled={isDisabled}
                />
              </Col>
              <Col xs lg="1">
                <Button variant='danger' onClick={handleDeleteBtn.bind(this, props.todo.id)} disabled={isDisabled}>
                  Delete
                </Button>
              </Col>
            </Row>
            </Container>
          </ListGroup.Item>
    );
};

export default TodoItem;