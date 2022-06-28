import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { selectModalState, setModal } from "../Redux/Slices/ModalSlice";
import { removeUser } from "../Redux/Slices/UserSlice";
import { getSelectedUser } from "./../Redux/Slices/SelectedUserSlice";

const RemoveModal = () => {
  const dispatch = useDispatch();
  const { removeModal } = useSelector(selectModalState);
  const user = useSelector(getSelectedUser);
  const handleCancelClick = () => {
    dispatch(setModal({ type: "removeModal", value: false }));
  };

  const handleRemoveClick = () => {
    dispatch(removeUser({ id: user?.id }));
    dispatch(setModal({ type: "removeModal", value: false }));
  };
  return (
    <Modal
      isOpen={removeModal}
      appElement={document.getElementById("root")}
      className="modal"
    >
      <div className="modal-content">
        <div className="modal-heading">
          Are you sure you want to remove the current student from the list?
        </div>
        <div>
          <label className="add-label" htmlFor="name">
            STUDENT NAME
          </label>
          <div className="label-value">{user?.name}</div>
        </div>
        <label className="add-label" htmlFor="klass">
          CLASS
        </label>
        <div className="label-value">{user?.class}</div>
        <div className="line-segment" />
        <div className="action-button">
          <button className="cancel-modal" onClick={handleCancelClick}>
            Cancel
          </button>
          <button
            type="submit"
            className="danger-modal"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveModal;
