import React from "react";

import "./button.css";

const Button = ({ children, ...props }) => {
  return (
    <button className={props.filled ? "btn filled" : "btn"} {...props}>
      {children}
    </button>
  );
};

export default Button;
