import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder="texto de la tarea nueva"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="todo-form__button-container">
        <button className="todo-form__button name--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button className="todo-form__button name--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
