import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from './reviews-service';

export const findReview = createAsyncThunk(
  'reviews/findReview', 
  async (albumId) => await service.findReview(albumId)
);

export const createReview = createAsyncThunk(
  'reviews/createReview',
  async ({review, albumId}) => {
    return await service.createReview({review, albumId});    
  }
);

export const findMyReview = createAsyncThunk(
  'reviews/findMyReview',
  async () => {
    return await service.findMyReview();
  }
);

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