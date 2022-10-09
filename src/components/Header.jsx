import React from "react";

function Header({ header, subheader }) {
  return (
    <div>
      <div className="parent-head">
        <div className="header">{header}</div>
      </div>
      <div>
        <div className="subheader">{subheader}</div>
      </div>
    </div>
  );
}

export default Header;
