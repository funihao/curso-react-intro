import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
