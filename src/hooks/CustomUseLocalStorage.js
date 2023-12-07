import { useState, useCallback } from "react";

function CustomLocalStorage() {
  const [value, setValue] = useState();

  function removeLocalStorage(key) {
    if (localStorage.hasOwnProperty(key)) {
      localStorage.removeItem(key);
    } else {
      return "Key not found. Try again.";
    }
  }

  // const removeLocalStorage = useCallback((key) => {
  //   if (localStorage.hasOwnProperty(key)) {
  //     localStorage.removeItem(key);
  //   } else {
  //     return "Key not found. Try again.";
  //   }
  // }, []);

  function saveToLocalStorage(key, value) {
    if (typeof key === "string" && typeof value === "string") {
      localStorage.setItem(key, value);
    }

    if (typeof key === "number" && typeof value === "number") {
      localStorage.setItem(key, value);
    }

    if (typeof key === "string" && typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    }

    if (typeof key === "number" && typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  function getLocalStorageItem(key) {
    if (localStorage.hasOwnProperty(key)) {
      let localStorageItem = localStorage.getItem(key);

      if (/[{}[\]]/.test(localStorageItem)) {
        return JSON.parse(localStorageItem);
      } else {
        return localStorageItem;
      }
    }
  }

  return [
    value,
    setValue,
    saveToLocalStorage,
    removeLocalStorage,
    getLocalStorageItem,
  ];
}

export default CustomLocalStorage;
