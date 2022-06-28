import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "./../Redux/Slices/UserSlice";

const RightFooter = () => {
  const users = useSelector(getUsers);
  return (
    <div className="footer">{`Showing ${users.length} of ${users.length} entries`}</div>
  );
};

export default RightFooter;
