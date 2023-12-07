import { useState, useEffect } from "react";

function EmailCheck() {
  const [input, setInput] = useState("male");

  function handleOnChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  return [input, handleOnChange];
}

export default EmailCheck;
