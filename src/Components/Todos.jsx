import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTodo , todosSelector,removeTodos, removeTodo, markComplete} from '../Store/Reducer/todoSlice';
import TodoItem from './TodoItem'
import {ListGroup, Button, Container, Row, Col} from 'react-bootstrap'


function Todos() {

  const [loaded, setLoaded] = useState(false);
  const [isFulfilled, setIsFulifilled] = useState(false);
  const [items, setItems] = useState([]);

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
		dispatch(getTodo())
    .then((value) => {
      setIsFulifilled(true)
      setLoaded(true)
      // console.log(value)
      // todos.forEach((todo) => {
      //   setTimeout((todo) => {
      //     setItems([...items, todo])
      //     console.log(items);
      //   }, 1000 + items.length*100);
      // })
      // console.log(items);
      // console.log(todos);
    },
    (reason) => {
      setIsFulifilled(false)
      setLoaded(true)
      // console.log(reason)
    })
	// }, [])
}, [dispatch])

  // useEffect(() => {
  //   todos.forEach((todo) => {
  //     setTimeout(() => {
  //       setItems([...items, todo])
  //       // console.log('items');
  //       console.log(items);
  //     }, 1000 + todo.id*10)
  //     // setTimeout(() => {
  //     //   console.log(items)
  //     // }, 10000)
  //   })
  //   // console.log(items);
  //   // console.log(todos);
  // }, [todos])

  if(!loaded) {
    return <h1>Loading...</h1>
  } else if(!isFulfilled) {
    return <h1>Request Failed</h1>
  } else {
    return (
      <div>
        <ListGroup as='ul' variant='flush'>
          {todos.map((todo) => (
            <TodoItem todo={todo}  key={todo.id} toggleIsComplete={toggleIsComplete} handleDelete={handleDelete}/>
          ))}
        </ListGroup>
      </div>
    )
  }

}


export default Todos;
