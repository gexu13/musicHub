import { createSlice } from "@reduxjs/toolkit";
import { findBookmarkThunk, deleteBookmarkThunk } from "../services/bookmark-thunk";

const initialState = {
   bookmarks: [],
   loading: false
}

const bookmarkSlice = createSlice({
 name: 'bookmarks',
 initialState,
 extraReducers: {
  [findBookmarkThunk.pending]:
  (state) => {
     state.loading = true
     state.bookmarks = [] },
  [findBookmarkThunk.fulfilled]:
  (state, { payload }) => {
     state.loading = false
     state.bookmarks = payload },
  [findBookmarkThunk.rejected]:
  (state, action) => {
     state.loading = false
     state.error = action.error
  },

  [deleteBookmarkThunk.pending]: 
  (state) => {
    state.loading = true;
  },
  [deleteBookmarkThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.bookmarks = state.bookmarks.filter(t => t._id !== payload)
    },
  [deleteBookmarkThunk.rejected]:
  (state, action) => {
    state.loading = false
    state.error = action.error
  },

 },

 reducers: {


 }
});

export default bookmarkSlice.reducer;
