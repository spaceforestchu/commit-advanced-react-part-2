import { useState, useCallback } from "react";

function CustomToggleHook(initialValue = true) {
  const [toggle, setToggle] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }

    return Boolean(initialValue);
  });

  const handleToggle = useCallback((value) => {
    if (typeof value === "boolean") {
      return setToggle(value);
    }

    return setToggle((v) => !v);
  }, []);

  return [toggle, handleToggle];
}

export default CustomToggleHook;
