import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const client_id = "f114a06a63c34b5dbb4e2c3c5a515e93";
const client_secret = "48a5f48e838440bb93f21d3e9e8f1c63";

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
