import { useState } from "react";

export const useInputValue = (initialValue, type, placeholder) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    let regex = new RegExp(/^[A-Za-z0-9]{1,10}$/g);
    let resp = regex.test(e.target.value);

    if (!resp) {
      setError(true);

      return;
    }

    console.log("todo bien");

    setValue(e.target.value);
  };

  return { type, value, placeholder, onChange, error };
};

export default useInputValue;
