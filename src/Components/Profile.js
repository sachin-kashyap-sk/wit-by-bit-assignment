import React from "react";
import avatar from "../Assets/ellipse.png";
const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt={avatar} className="avatar" />
      <div className="username">Andy Samberg</div>
      <div className="email">andy.samberg@gmail.com</div>
      <button className="profile-btn">VIEW PROFILE</button>
    </div>
  );
};

export default Profile;
