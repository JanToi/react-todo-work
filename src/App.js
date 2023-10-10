import React, {useState} from 'react';
import './App.css';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';
import "./index.css";


function App() {
    const [todos, setTodos] = useState([]);

    const addTask = (text) => {
      setTodos([...todos, text]);
    };

    const deleteTodo = (text) => {
      const updatedTodos = todos.filter((todo) => todo !== text);
      setTodos(updatedTodos);
    }

    return (
      <div className="App">
        <h1>To-Do List</h1>
        <ToDoInput addTask={addTask} />
        <ToDoList todos={todos} onDelete={deleteTodo} />
      </div>
    );
}

export default App;
