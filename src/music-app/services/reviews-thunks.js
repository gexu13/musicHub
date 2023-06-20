import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from './reviews-service';

export const findReview = createAsyncThunk(
  'reviews/findReview', 
  async () => await service.findReview()
);

export const createReview = createAsyncThunk(
  'reviews/createReview',
  async (review) => {
    return await service.createReview(review);    
});

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (reviewId) => {
    await service.deleteReview(reviewId);
    return reviewId;
});

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (review) => {
    return await service.updateReview(review);
  }
);