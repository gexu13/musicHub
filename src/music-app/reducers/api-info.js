import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const client_id = "7ef9e2995db44a4ea55eb166ca757f66";
const client_secret = "86c419e8c2cf4763892ff8de340ef70d";

export const fetchTokenThunk = createAsyncThunk(
  'auth/fetchTokenThunk',
  async () => {
    const authOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: "grant_type=client_credentials",
    };

    const response = await fetch("https://accounts.spotify.com/api/token", authOptions);
    const data = await response.json();
    return data.access_token;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: '' },
  reducers: {},
  extraReducers: {
    [fetchTokenThunk.fulfilled]: (state, action) => {
      state.token = action.payload;
    }
  }
});

export default authSlice.reducer;
