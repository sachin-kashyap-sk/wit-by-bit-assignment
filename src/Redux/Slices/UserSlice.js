import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Robert Fox",
    class: 1,
    score: 78,
  },

  {
    id: "2",
    name: "Ralph Edwards",
    class: 2,
    score: 20,
  },

  {
    id: "3",
    name: "Esther Howard",
    class: 3,
    score: 60,
  },

  {
    id: "4",
    name: "Eleanor Pena",
    class: 8,
    score: 60,
  },

  {
    id: "5",
    name: "Arlene McCoy",
    class: 7,
    score: 85,
  },

  {
    id: "6",
    name: "Marvin McKinney",
    class: 9,
    score: 25,
  },

  {
    id: "7",
    name: "Wade Warren",
    class: 7,
    score: 90,
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    userUpdated(state, action) {
      const { id, name, klass, score } = action.payload;
      const existingUser = state.find((post) => post.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.class = klass;
        existingUser.score = score;
      }
    },
    removeUser(state, action) {
      const { id } = action.payload;
      const index = state.findIndex((post) => post.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addUser, userUpdated, removeUser } = userSlice.actions;
export default userSlice.reducer;
export const getUsers = (state) => state.users;
