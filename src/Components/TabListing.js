import React from "react";
import { listingContent } from "./../Constants/index";

const TabListing = () => {
  return (
    <div className="tab-listing">
      {listingContent.map((item) => {
        const className =
          item.iconLabel === "Students" ? "tab-item-selected" : "tab-item";
        return (
          <div className={className} key={item.iconLabel}>
            <img src={item.iconSource} alt={item.iconSource} className="icon" />
            <div className="tab-title">{item.iconLabel}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TabListing;
