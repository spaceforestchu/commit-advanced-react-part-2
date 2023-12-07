import { useState } from "react";

function CustomHooksBasic() {
  const [randomNumber, setRandomNumber] = useState(0);

  const [firstName, setFirstName] = useState("");

  function generateRandomNumber() {
    let randomNumberResult = Math.floor(Math.random() * 1000) + 1;

    setRandomNumber(randomNumberResult);
  }

  return [randomNumber, generateRandomNumber, firstName, setFirstName];
  //   return { randomNumber, generateRandomNumber, firstName, setFirstName };
}

export default CustomHooksBasic;
