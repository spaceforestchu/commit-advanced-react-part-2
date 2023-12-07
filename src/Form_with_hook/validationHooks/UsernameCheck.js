import { useState, useEffect } from "react";
import { isAlphanumeric } from "validator";

function UsernameCheck() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    if (onBlur || (onFocus && input.length > 1)) {
      if (!isAlphanumeric(input)) {
        setError(
          `Username cannot have special characters only characters and numbers`
        );
      } else {
        setError(false);
      }
    }
  }, [onFocus, onBlur, input]);

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  return [input, handleOnChange, error, setOnFocus, setOnBlur];
}

export default UsernameCheck;
