import { CompletedIcon } from "../TodoIcon/CompletedIcon";
import { DeletedIcon } from "../TodoIcon/DeletedIcon";
import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo__item">
      <CompletedIcon completed={completed} onComplete={onComplete} />
      <p
        className={`todo__item_p todo__item_p--active ${
          completed && "todo__item_p--complete"
        }`}
      >
        {text}
      </p>
      <DeletedIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
