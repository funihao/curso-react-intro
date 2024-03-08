import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  const totalCompleted = totalTodos === completedTodos;

  return (
    <>
      {totalCompleted && (
        <h1 className="todo__counter">No hay tareas pendientes</h1>
      )}
      {!totalCompleted && (
        <h1 className="todo__counter">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOS
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
