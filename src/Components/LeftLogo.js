import React from "react";
import logoImg from "../Assets/vector.png";
const LeftLogo = () => {
  return (
    <div className="left-logo">
      <div className="logo-container">
        <img src={logoImg} alt={logoImg} />
      </div>
      <div className="logo-title">School Space</div>
    </div>
  );
};

export default LeftLogo;
