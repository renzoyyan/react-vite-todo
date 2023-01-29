import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const dummyTodos = [
  {
    id: 1,
    content: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    content: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    content: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    content: "Read for 1 hour",
    completed: false,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(dummyTodos);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todos;
