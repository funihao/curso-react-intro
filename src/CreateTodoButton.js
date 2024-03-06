import { useState } from "react";

import "./CreateTodoButton.css";

function CreateTodoButton() {
  const [clickState, setClickState] = useState("false");
  return (
    <button className="CreateTodoButton" onClick={console.log("")}>
      +
    </button>
  );
}

export { CreateTodoButton };
