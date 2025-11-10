import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []); //초기화 한번 실행   , []

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //const [todos, setTodos] = useState([]); 변화가 발행하면 그때마다   , [todos]

  const addOrUpdateTodo = (todo) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm
        addOrUpdateTodo={addOrUpdateTodo}
        currentTodo={editIndex !== null ? todos[editIndex] : ""}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import TodoInput from "./component/TodoInput";
// import TodoList from "./component/TodoList";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     if (text.trim() === "") return;
//     const newTodo = { id: Date.now(), text, completed: false };
//     setTodos([...todos, newTodo]);
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const removeTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const editTodo = (id, newText) => {
//     setTodos(
//       todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
//     );
//   };

//   return (
//     <div className="app">
//       <h1>🌈 My Todo List</h1>
//       <TodoInput addTodo={addTodo} />
//       <TodoList
//         todos={todos}
//         toggleTodo={toggleTodo}
//         removeTodo={removeTodo}
//         editTodo={editTodo}
//       />
//     </div>
//   );
// }

// export default App;
