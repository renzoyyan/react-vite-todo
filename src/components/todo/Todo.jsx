import iconCheck from "../../assets/images/icon-check.svg";

const Todo = ({ todo, handleCompleted = () => {} }) => {
  const completedTodo = todo.completed ? "completed" : null;

  return (
    <li className={completedTodo}>
      <label htmlFor={`todo-${todo.id}`} className="hidden">
        <input
          type="checkbox"
          className="hidden"
          id={`todo-${todo.id}`}
          defaultChecked={todo.completed}
        />
      </label>

      <div className="checkbox-wrapper">
        <button type="button" className="checkbox" onClick={handleCompleted}>
          {todo.completed ? <img src={iconCheck} alt="Complete" /> : null}
        </button>
      </div>
      <p
        onClick={handleCompleted}
        className={todo.completed ? "line-through" : null}
      >
        {todo.content}
      </p>
    </li>
  );
};

export default Todo;
