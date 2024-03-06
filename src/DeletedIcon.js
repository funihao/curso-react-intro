import { TodoIcon } from "./TodoIcon";

function DeletedIcon({ onDelete }) {
  return <TodoIcon type="delete" color="#ccc" onClick={onDelete} />;
}

export { DeletedIcon };
