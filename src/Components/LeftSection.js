import React from "react";
import LeftLogo from "./LeftLogo";
import Profile from "./Profile";
import TabListing from "./TabListing";

const LeftSection = () => {
  return (
    <div className="left-section">
      <LeftLogo />
      <TabListing />
      <Profile />
    </div>
  );
};

export default LeftSection;
