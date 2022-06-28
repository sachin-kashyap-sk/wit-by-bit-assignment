import { configureStore } from "@reduxjs/toolkit";
import modal from "./Slices/ModalSlice";
import users from "./Slices/UserSlice";
import selectedUser from "./Slices/SelectedUserSlice";
export const store = configureStore({
  reducer: {
    modal,
    users,
    selectedUser,
  },
});
