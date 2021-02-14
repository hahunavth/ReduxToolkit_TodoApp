import "./styles.scss";
import NavBar from "./Components/NavBar";
import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";
import MyForm from "./Components/MyForm";
import TextToSpeech from "./Components/TextToSpeech";

export default function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <MyForm /> */}
      {/* <TodoForm /> */}
      {/* <Todos/> */}
      <TextToSpeech />
    </div>
  );
}
