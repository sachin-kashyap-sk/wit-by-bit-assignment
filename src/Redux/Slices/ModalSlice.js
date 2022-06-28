import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  removeModal: false,
  addModal: false,
  mode: "ADD",
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setModal, setMode } = modalSlice.actions;
export default modalSlice.reducer;
export const selectModalState = (state) => state.modal;
