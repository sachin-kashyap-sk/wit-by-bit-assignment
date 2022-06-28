import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../Redux/Slices/ModalSlice";
import { useFormik } from "formik";
import { addUser, userUpdated } from "../Redux/Slices/UserSlice";
import { nanoid } from "@reduxjs/toolkit";
import { getSelectedUser } from "./../Redux/Slices/SelectedUserSlice";
import { findGrade, findGradeClass, validationSchema } from "./../Helper/index";
import { CLASS_INST, SCORE_INST } from "./../Constants/index";

const AddModal = () => {
  const { addModal, mode } = useSelector((state) => state.modal);
  const user = useSelector(getSelectedUser);
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    dispatch(setModal({ type: "addModal", value: false }));
  };
  const handleSubmit = (values) => {
    const { name, score, klass } = values;
    if (mode === "ADD") {
      dispatch(
        addUser({
          name,
          score,
          class: +klass,
          id: nanoid(),
        })
      );
    } else {
      dispatch(userUpdated({ name, klass, score, id: user.id }));
    }
    formik.resetForm();
    dispatch(setModal({ type: "addModal", value: false }));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: !!user
      ? { name: user.name, score: user.score, klass: user.class }
      : { name: "", klass: "", score: "" },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Modal
      isOpen={addModal}
      appElement={document.getElementById("root")}
      className="modal"
    >
      <form onSubmit={formik.handleSubmit} className="modal-content">
        <div className="modal-heading">
          {mode === "ADD" ? "Add Student" : "Edit Student"}
        </div>
        <div>
          <label className="add-label" htmlFor="name">
            STUDENT NAME*
          </label>
          <input
            className="add-input"
            type="text"
            id="name"
            placeholder="Firstname Lastname"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        {formik.errors.name && formik.touched.name && (
          <div className="error-msg">{formik.errors.name}</div>
        )}
        <div>
          <label className="add-label" htmlFor="klass">
            CLASS*
          </label>
          <input
            className="add-input"
            type="number"
            id="klass"
            placeholder="Class e.g 5"
            onChange={formik.handleChange}
            value={formik.values.klass}
          />
          {formik.errors.klass && formik.touched.klass && (
            <div className="error-msg">{formik.errors.klass}</div>
          )}
          {!formik.errors.klass && <div className="message">{CLASS_INST}</div>}
        </div>
        <div>
          <label className="add-label" htmlFor="score">
            SCORE*
          </label>
          <input
            className="add-input"
            type="number"
            id="score"
            placeholder="Score e.g 95"
            onChange={formik.handleChange}
            value={formik.values.score}
          />
          {formik.errors.score && formik.touched.score && (
            <div className="error-msg">{formik.errors.score}</div>
          )}
          {!formik.errors.score && <div className="message">{SCORE_INST}</div>}
        </div>
        <div>
          <label className="add-label" htmlFor="result">
            RESULT
          </label>
          {formik.values.score && !formik.errors.score ? (
            <button
              className={
                formik.values.score > 40 ? "result-pass" : "result-fail"
              }
            >
              {formik.values.score > 40 ? "Passed" : "Failed"}
            </button>
          ) : (
            "-"
          )}
        </div>
        <div>
          <label className="add-label" htmlFor="result">
            GRADE
          </label>
          {formik.values.score && !formik.errors.score ? (
            <div className={findGradeClass(formik.values.score)}>
              {findGrade(formik.values.score)}
            </div>
          ) : (
            "-"
          )}
        </div>
        <div className="action-button">
          <button className="cancel-modal" onClick={handleCancelClick}>
            Cancel
          </button>
          <button type="submit" className="confirm-modal">
            Confirm
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddModal;
