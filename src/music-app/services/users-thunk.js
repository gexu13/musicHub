import { createAsyncThunk } from '@reduxjs/toolkit';
import { findUserById, deleteUser, findAllUsers } from './users-service'; 

export const fetchUserByIdThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
      const response = await findUserById(userId);
      return response;
  }
);

export const deleteUserThunk = createAsyncThunk(
  'users/deleteUser',
  async (userId) => {
    await deleteUser(userId);
    return userId;
});

export const findAllUsersThunk = createAsyncThunk(
  'reviews/findAllUsers',
  async () => await findAllUsers()
);
