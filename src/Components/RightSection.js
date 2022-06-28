import React from "react";
import RightFooter from "./RightFooter";
import RightHeader from "./RightHeader";
import RightMain from "./RightMain";

const RightSection = () => {
  return (
    <div className="right-section">
      <RightHeader />
      <RightMain />
      <RightFooter />
    </div>
  );
};

export default RightSection;
