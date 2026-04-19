import React, { useState } from "react";

const UseCustomHooks = (defaultValue) => {
  const [filedValue, setFieldValue] = useState(defaultValue);
  const handleFieldOnChange = (e) => {
    setFieldValue(e.target.value);
  };
  return [filedValue, handleFieldOnChange];
};

export default UseCustomHooks;
