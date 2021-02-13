import "./styles.scss";
import NavBar from "./Components/NavBar";
import Todos from './Components/Todos';
import TodoForm from "./Components/TodoForm";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <TodoForm />
      <Todos/>
    </div>
  );
}
