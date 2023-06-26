import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from '../services/bookmark-service';

export const findBookmarkThunk = createAsyncThunk(
  'bookmark/findMyBookmark',
  async () => {
    //console.log("findMyBookmark Thunk");
    const res = await service.findMyBookmark();
    return res;
  }
);

export const deleteBookmarkThunk = createAsyncThunk(
  'bookmark/deleteBookmark',
  async (bId) => {
    await service.deleteBookmark(bId);
    return bId;
}); 

export const createBookmarkThunk = createAsyncThunk(
  'bookmark/createBookmark',
  async ({userId, albumId}) => {
    return await service.createBookmark(userId, albumId);    
  }
);
