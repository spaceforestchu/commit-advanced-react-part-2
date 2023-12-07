import React from "react";

import CustomToggleHook from "./hooks/CustomUseToggleHook";

import "./App.css";

function App() {
  const [toggle, handleToggle] = CustomToggleHook();

  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        backgroundColor: toggle ? "white" : "black",
      }}
    >
      <h1
        style={{
          color: toggle ? "black" : "white",
        }}
      >
        Toggle Hook
      </h1>
      <button onClick={() => handleToggle(!toggle)}>
        {toggle ? `🔦` : `🌞`}
      </button>
    </div>
  );
}

export default App;
