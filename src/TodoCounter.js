import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  const totalCompleted = total === completed;
  let textCounter = "";

  if (totalCompleted) {
    textCounter = (
      <h1 className="todo__counter">Has COMPLETADO todas tus tareas</h1>
    );
  } else {
    textCounter = (
      <h1 className="todo__counter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }
  return textCounter;
}

export { TodoCounter };
