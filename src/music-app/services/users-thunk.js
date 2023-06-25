import { createAsyncThunk } from '@reduxjs/toolkit';
import { findUserById } from './users-service'; 

export const fetchUserByIdThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
      const response = await findUserById(userId);
      return response;
  }
);
