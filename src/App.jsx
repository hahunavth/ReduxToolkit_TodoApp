// import "./styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from "react";
import NavBar from "./Components/NavBar";
import TodoForm from "./Components/TodoForm";
import MyForm from "./Components/MyForm";
import TextToSpeech from "./Components/TextToSpeech";
import {Alert, Container} from 'react-bootstrap';

const Todos = React.lazy(() => import('./Components/Todos'))

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Alert variant="success"> 
        <Alert.Heading>Notification</Alert.Heading>
        hello
        <hr/>
      </Alert>
      {/* <MyForm /> */}
      <Container>
        <TodoForm />
        <Suspense fallback={<h1>loading</h1>} >
          <Todos/>
        </Suspense>
      </Container>
      {/* <TextToSpeech /> */}
    </div>
  );
}
