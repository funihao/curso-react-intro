import { TodoIcon } from ".";

function CompletedIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "#ccc"}
      onClick={onComplete}
    />
  );
}

export { CompletedIcon };
