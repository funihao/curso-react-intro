import { CompletedIcon } from "./CompletedIcon";
import { DeletedIcon } from "./DeletedIcon";
import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo__item">
      {/* <span
        className={`icon icon__check ${completed && "icon__check--active"}`}
        onClick={onComplete}
      >
        V
      </span> */}
      <CompletedIcon completed={completed} onComplete={onComplete} />
      <p
        className={`todo__item_p todo__item_p--active ${
          completed && "todo__item_p--complete"
        }`}
      >
        {text}
      </p>
      <DeletedIcon onDelete={onDelete} />
      {/* <span className="icon icon__delete" onClick={onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
