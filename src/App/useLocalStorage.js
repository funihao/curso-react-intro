import { useState } from "react";

function useLocalStorage(itemName, initValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem = initValue;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(parseItem));
  } else {
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parseItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
