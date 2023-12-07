import { useState, useEffect } from "react";
import { isAlpha } from "validator";

function InputCheck(placeHolder) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    if (onBlur || (onFocus && input.length > 1)) {
      if (input.length === 0) {
        setError(`${placeHolder} cannot be empty`);
      } else if (!isAlpha(input)) {
        setError(`${placeHolder} cannot have special characters`);
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

export default InputCheck;
