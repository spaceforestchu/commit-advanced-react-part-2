import { useState, useEffect } from "react";
import { isStrongPassword } from "validator";
import { debounce } from "lodash";

function PasswordCheck() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  function deBounceError(message) {
    let debounceFunc = debounce(function () {
      setError(message);
    }, 1000);

    debounceFunc();
  }

  useEffect(() => {
    if (onBlur || (onFocus && input.length > 1)) {
      if (confirmPassword !== input) {
        deBounceError("password and confirm password must match");
        // setError(`${input} is not a valid email. Please enter a valid email`);
      } else {
        setError(false);
      }
    }
  }, [input, confirmPassword]);

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  useEffect(() => {
    if (onBlur || (onFocus && input.length > 1)) {
      if (!isStrongPassword(input)) {
        deBounceError(
          `Password must be at least 8 characters long, 1 uppercase, 1 lowercase, 1 number and a special character`
        );
      } else {
        setError(false);
      }
    }
  }, [onFocus, onBlur, input]);

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  return [
    input,
    handleOnChange,
    error,
    setOnFocus,
    setOnBlur,
    confirmPassword,
    handleConfirmPassword,
  ];
}

export default PasswordCheck;
