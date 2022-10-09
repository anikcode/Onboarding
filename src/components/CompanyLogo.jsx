import React from "react";
import cutshort from "../images/cutshort.png";
function CompanyLogo() {
  return (
    <div className="img-logo">
      <img src={cutshort} alt="logo" className="img" />
      <div className="logo-text">CutShort</div>
    </div>
  );
}

export default CompanyLogo;
