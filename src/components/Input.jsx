import React from "react";
import "./index.css";

function Input({ placeholder, label, inputValue, onInputChange }) {
  return (
    <div>
      <div className="label-text">{label}</div>
      <input
        placeholder={placeholder}
        className="input-text"
        inputValue={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
}

export default Input;
