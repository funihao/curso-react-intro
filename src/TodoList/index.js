import "./TodoList.css";

function TodoList({ children }) {
  return <ul className="todo__list">{children}</ul>;
}

export { TodoList };
