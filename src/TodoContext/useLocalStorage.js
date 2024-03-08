import { useEffect, useState } from "react";

function useLocalStorage(itemName, initValue) {
  const [item, setItem] = useState(initValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem = initValue;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// localStorage.removeItem("TODOS_V1");
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
