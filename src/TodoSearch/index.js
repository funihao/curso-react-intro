import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <>
      <div className="todo__search">
        <input
          className="todo__search--input"
          placeholder="Cortar cebolla"
          value={searchValue}
          onChange={(newValue) => {
            setSearchValue(newValue.target.value);
          }}
        />
      </div>
    </>
  );
}

export { TodoSearch };
