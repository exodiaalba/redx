import './App.css';
import Add from "./compent/add";
import Todolist from "./compent/todolist";
import { useState } from "react";



function App() {
  const [todos, setTodos] = useState([
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ]);

  const deleteHandler = (ID) => {
    setTodos(todos.filter((el) => el.id !== ID));
  };

  const doneHandler = (ID) => {
    setTodos(
      todos.map((el) => (el.id === ID ? { ...el, isDone: !el.isDone } : el))
    );
    console.log(todos.map((el) => el.id));
  };
  const [input, setInput] = useState("");
  const addHandler = (newTodo) => {
    input&&
    setTodos([...todos, newTodo])
  };
  return (
    <div className="App">
      <h1>TODO APP!!</h1>
      <Add addHandler={addHandler} input={input} setInput={setInput} />
      <Todolist
        todoList={todos}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
      />
    </div>
  );
}

export default App;
