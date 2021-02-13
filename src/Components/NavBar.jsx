import React from "react";
import {useSelector} from 'react-redux';
import {todosSelector} from '../Store/Reducer/todoSlice'

const NavBar = () => {
  const todos = useSelector(todosSelector)

  return (
    <div className="NavBar">
      <h1>MyReduxTodos</h1>
      <div className="NavMenu">
        <span>Home</span>
        <span>About</span>
        <span>Total todos: {todos.length}</span>
      </div>
    </div>
  );
};

export default NavBar;
