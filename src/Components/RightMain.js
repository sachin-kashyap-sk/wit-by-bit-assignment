import React from "react";
import editIcon from "../Assets/edit.png";
import removeIcon from "../Assets/remove.png";
import { useSelector, useDispatch } from "react-redux";
import { findGrade, findGradeClass, standardSuffix } from "./../Helper/index";
import { setSelectedUser } from "../Redux/Slices/SelectedUserSlice";
import { setModal, setMode } from "../Redux/Slices/ModalSlice";

const RightMain = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  
  const handleEditClick = (e) => {
    const selectedUser = users.find((user) => user.id === `${e.target.id}`);
    dispatch(setSelectedUser(selectedUser));
    dispatch(setMode("EDIT"));
    dispatch(setModal({ type: "addModal", value: true }));
  };

  const handleRemoveClick = (e) => {
    const selectedUser = users.find((user) => user.id === `${e.target.id}`);
    dispatch(setSelectedUser(selectedUser));
    dispatch(setModal({ type: "removeModal", value: true }));
  };

  return (
    <div className="main-section">
      <table className="student-table">
        <thead className="table-head">
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="table-row" key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>
                {user.class}
                {standardSuffix(user.class)}
              </td>
              <td>
                <button
                  className={user.score > 40 ? "result-pass" : "result-fail"}
                >
                  {user.score > 40 ? "Passed" : "Failed"}
                </button>
              </td>
              <td>{user.score}/100</td>
              <td className={findGradeClass(user.score)}>
                {findGrade(user.score)}
              </td>
              <td>
                <button
                  className="edit-remove-btn"
                  id={user.id}
                  onClick={handleEditClick}
                >
                  <img id={user.id} src={editIcon} alt={editIcon} />
                </button>
                <button
                  className="edit-remove-btn"
                  id={user.id}
                  onClick={handleRemoveClick}
                >
                  <img src={removeIcon} alt={removeIcon} id={user.id} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RightMain;
