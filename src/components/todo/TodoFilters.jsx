import React from "react";

const TodoFilters = ({ status, handleFilterStatus }) => {
  return (
    <>
      <button
        type="button"
        className={`btn text-sm ${status === "all" ? "active" : null}`}
        onClick={() => handleFilterStatus("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`btn text-sm ${status === "active" ? "active" : null}`}
        onClick={() => handleFilterStatus("active")}
      >
        Active
      </button>
      <button
        type="button"
        className={`btn text-sm ${status === "completed" ? "active" : null}`}
        onClick={() => handleFilterStatus("completed")}
      >
        Completed
      </button>
    </>
  );
};

export default TodoFilters;
