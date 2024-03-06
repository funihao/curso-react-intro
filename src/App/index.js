import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Lavar coche", completed: false },
//   { text: "Limpiar arena michis", completed: true },
//   { text: "Lista de compra", completed: false },
//   { text: "Llevar coche a taller", completed: false },
//   { text: "Usar algo derivados", completed: true },
//   { text: "Usar distinto derivados", completed: true },
//   { text: "Usar siempre derivados", completed: true },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// // localStorage.removeItem("TODOS_V1");

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
