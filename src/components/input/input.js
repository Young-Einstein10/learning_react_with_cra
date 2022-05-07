import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <label className="field-wrapper">
      <input className="input" {...props} />
    </label>
  );
};

export default Input;
