import React from "react";

import CustomLocalStorage from "./hooks/CustomUseLocalStorage";

import "./App.css";

function App() {
  const [
    value,
    setValue,
    saveToLocalStorage,
    removeLocalStorage,
    getLocalStorageItem,
  ] = CustomLocalStorage();

  async function fetchSomeData() {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const user = await response.json();

    setValue(user);
  }

  return (
    <div>
      <h1>Local storage</h1>
      <button onClick={fetchSomeData}>Fetch Data</button>
      <div>{JSON.stringify(value, null, 2)}</div>

      <br />
      <button
        onClick={() => {
          saveToLocalStorage("user-id", value.uid);
          alert("Save to local storage");
        }}
      >
        Save to localStorage
      </button>
      <button
        onClick={() => {
          removeLocalStorage("user-id");
          alert("Remove from local storage");
        }}
      >
        Delete from localStorage
      </button>

      <hr />
      <p>Get the localStorage value</p>
      <button
        onClick={() => {
          let userId = getLocalStorageItem("user-id");
          console.log(userId);
        }}
      >
        Show localStorage Value
      </button>
    </div>
  );
}

export default App;
