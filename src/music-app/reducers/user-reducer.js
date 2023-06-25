import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByIdThunk, deleteUserThunk, findAllUsersThunk } from "../services/users-thunk";
const initialState = {
   users: [],
   loading: false
}

const userSlice = createSlice({
 name: 'users',
 initialState,
 extraReducers: {
  [findAllUsersThunk.pending]:
  (state) => {
     state.loading = true
     state.users = [] },
  [findAllUsersThunk.fulfilled]:
  (state, { payload }) => {
     state.loading = false
     state.users = payload },
  [findAllUsersThunk.rejected]:
  (state, action) => {
     state.loading = false
     state.error = action.error
  },
   [fetchUserByIdThunk.pending]:
      (state) => {
         state.loading = true
         state.users = [] },
   [fetchUserByIdThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         const userIndex = state.users.findIndex(user => user._id === payload._id);
         if (userIndex !== -1) {
            state.users[userIndex] = payload;
         } else {
            state.users.push(payload);
         }
      },
   [fetchUserByIdThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },

   [deleteUserThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.users = state.users.filter(user => user._id !== payload)
    },
 },

 reducers: {


 }
});

export default userSlice.reducer;
