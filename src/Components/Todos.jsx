import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTodo , todosSelector,removeTodos, markComplete} from '../Store/Reducer/todoSlice';


function Todos() {
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  const toggleIsComplete = (id) => {
    dispatch(markComplete(id))
  }

  const handleDelete = (id) => {
    dispatch(removeTodos(id));
  }

  useEffect(() => {
		// send request to jsonplaceholder
		dispatch(getTodo())
	}, [dispatch])

  return (
    <div>
      <ul className="Todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="Todos-item">
            <span>{todo.title}</span>
            <input key={todo.id} 
            type="checkbox" 
            checked={todo.isComplete} 
            onChange={toggleIsComplete.bind(this, todo.id)}/>
            <button onClick={handleDelete.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
