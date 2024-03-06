import { TodoIcon } from ".";

function DeletedIcon({ onDelete }) {
  return <TodoIcon type="delete" color="#ccc" onClick={onDelete} />;
}

export { DeletedIcon };
