import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoFilters from "./TodoFilters";

const TodoList = ({ todos, setTodos }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState(todos);

  const toggleCompleted = (id) => {
    const updateTodo = todos?.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updateTodo);
  };

  const clearCompleted = () => {
    const removeCompleted = todos?.filter((todo) => !todo.completed);
    setTodos(removeCompleted);
  };

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };

  useEffect(() => {
    switch (filterStatus) {
      case "active":
        return setFilterTodos(todos?.filter((todo) => !todo.completed));

      case "completed":
        return setFilterTodos(todos?.filter((todo) => todo.completed));

      default:
        return setFilterTodos(todos);
    }
  }, [todos, filterStatus]);

  const noCompleted = filterStatus === "completed" ? "completed task" : "task";

  return (
    <section className="todo-list-section">
      <ul className="todo-list">
        {filterTodos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCompleted={() => toggleCompleted(todo.id)}
          />
        ))}
        {filterTodos.length < 1 && (
          <p className="text">You have no {noCompleted} yet!</p>
        )}
      </ul>

      <div className="flex items-center justify-between py-4 px-9">
        <p className="todo-left">{todos?.length} items left</p>

        <div className="filter-desktop space-x-4">
          <TodoFilters
            status={filterStatus}
            handleFilterStatus={handleFilterStatus}
          />
        </div>
        <button type="button" className="btn" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </section>
  );
};

export default TodoList;
