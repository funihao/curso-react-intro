import { useEffect, useState } from "react";

function useLocalStorage(itemName, initValue) {
  const [item, setItem] = useState(initValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("buscando datos ...");
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
