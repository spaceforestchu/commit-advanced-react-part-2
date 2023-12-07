import React from "react";
import CustomHooksBasic from "./hooks/CustomUseBasicHook";
import "./App.css";

function App() {
  const [randomNumber, generateRandomNumber, firstName, setFirstName] =
    CustomHooksBasic();
  // const { randomNumber, generateRandomNumber, firstName, setFirstName } =
  //   CustomHooksBasic();
  return (
    <div>
      <h1>Custom hook basic</h1>
      <h2>Click the button to generate a random number </h2>
      <h3>{randomNumber}</h3>
      <button onClick={() => generateRandomNumber()}>Submit</button>

      <hr />

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <p>{firstName}</p>
    </div>
  );
}

export default App;
