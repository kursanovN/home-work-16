

import { useState } from "react";

export const useInput = (initialValue, type, validation) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validate = () => {
    if (type === "email") {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(value)) {
        setError("error email");
        return false;
      }
    }
    if (type === "password") {
      if (value.length < 8) {
        setError("error password");
        return false;
      }
    }
    if (type === "date") {
      const dateRegex = /^\d{4}-\d{2}-\d{3}$/;
      if (!dateRegex.test(value)) {
        setError("error date");
        return false;
      }
    }
    
    if (validation && !validation(value)) {
      setError("Invalid value");
      return false;
    }

    setError(null);
    return true;
  };

  return {
    value,
    error,
    onChange: handleChange,
    validate,
  };
};
