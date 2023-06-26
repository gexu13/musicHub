import { createSlice } from "@reduxjs/toolkit";
import {createReview, findReview, deleteReview, updateReviewThunk, findMyReviewThunk, findAllReview} from "../services/reviews-thunks";
const initialState = {
   reviews: [],
   loading: false
}

const reviewSlice = createSlice({
 name: 'reviews',
 initialState,
 extraReducers: {
  [findAllReview.pending]:
  (state) => {
     state.loading = true
     state.reviews = [] },
  [findAllReview.fulfilled]:
  (state, { payload }) => {
     state.loading = false
     state.reviews = payload },
  [findAllReview.rejected]:
  (state, action) => {
     state.loading = false
     state.error = action.error
  },
   [findReview.pending]:
      (state) => {
         state.loading = true
         state.reviews = [] },
   [findReview.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.reviews = payload },
   [findReview.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },

   [createReview.fulfilled]:
   (state, { payload }) => {
     state.loading = false
     state.reviews.push(payload)
  },

    [deleteReview.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.reviews = state.reviews.filter(t => t._id !== payload)
    },

    [updateReviewThunk.fulfilled]:
    (state, { payload }) => {
    state.loading = false
    const reviewNdx = state.reviews.findIndex((t) => t._id === payload._id)
    state.reviews[reviewNdx] = { ...state.reviews[reviewNdx], ...payload }
    },
 },

 reducers: {


 }
});

export default reviewSlice.reducer;