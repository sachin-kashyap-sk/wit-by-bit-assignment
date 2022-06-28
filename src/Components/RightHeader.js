import React from "react";
import { useDispatch } from "react-redux";
import plusIcon from "../Assets/plus.png";
import { setModal, setMode } from "../Redux/Slices/ModalSlice";
import { setSelectedUser } from "../Redux/Slices/SelectedUserSlice";

const RightHeader = () => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(setModal({ type: "addModal", value: true }));
    dispatch(setMode("ADD"));
    dispatch(setSelectedUser(null));
  };

  return (
    <div className="header">
      <div className="header-title">Students</div>
      <div>
        <button className="add-btn" onClick={handleAddClick}>
          <img src={plusIcon} alt={plusIcon} />
          <div className="btn-title">ADD</div>
        </button>
      </div>
    </div>
  );
};

export default RightHeader;
