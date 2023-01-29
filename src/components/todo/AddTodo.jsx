import React, { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleNewTodo = (e) => {
    e.preventDefault();

    if (todo === "") return;

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      content: todo,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);

    setTodo("");
  };

  return (
    <div className="form-group">
      <div className="checkbox-wrapper">
        <div className="checkbox"></div>
      </div>

      <form onSubmit={handleNewTodo}>
        <input
          value={todo}
          type="text"
          placeholder="Create new todo..."
          className="form-control"
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
