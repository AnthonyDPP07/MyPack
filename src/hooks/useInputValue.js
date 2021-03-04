import { useState } from "react";

export const useInputValue = (initialValue, type, placeholder) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    let regex = new RegExp(/^[A-Za-z0-9]{0,10}$/g);
    let resp = regex.test(e.target.value);

    if (!resp) {
      return;
    }

    setValue(e.target.value);
  };

  return { type, value, placeholder, onChange };
};

export default useInputValue;
