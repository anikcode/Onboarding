import React from "react";

function Button({ buttonText, onClick }) {
  return (
    <div onClick={onClick} className="parent-btn">
      <button className="btn">
        <span className="btn-text">{buttonText}</span>
      </button>
    </div>
  );
}

export default Button;
