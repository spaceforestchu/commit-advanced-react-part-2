import { useState, useEffect } from "react";
import { isEmail } from "validator";
import { debounce } from "lodash";

function EmailCheck() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  function deBounceError() {
    let debounceFunc = debounce(function () {
      setError(`${input} is not a valid email. Please enter a valid email`);
    }, 1000);

    debounceFunc();
  }

  useEffect(() => {
    if (onBlur || (onFocus && input.length > 1)) {
      if (!isEmail(input)) {
        deBounceError();
        // setError(`${input} is not a valid email. Please enter a valid email`);
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

export default EmailCheck;
