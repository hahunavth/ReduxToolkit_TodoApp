import React from "react";
import {useSelector} from 'react-redux';
import {todosSelector} from '../Store/Reducer/todoSlice'
import {Navbar, Containe, Nav} from 'react-bootstrap'

const NavBar = () => {
  const todos = useSelector(todosSelector)

  return (
    <Navbar expand='lg' bg="primary" variant="dark">
      <Navbar.Brand>MyReduxTodos</Navbar.Brand>
      <Nav>
      <Nav.Link href='#'>Home</Nav.Link>
        <Nav.Link href='#'>About</Nav.Link>
        <Nav.Link href='#'>Total todos: {todos.length}</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
