import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';

const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

const initialState = {
  data: {
    username: '',
    name: '',
    email: '',
    roles: [],
    notes: []
  },
  isLogged: false,
  status: 'idle', // idle, loading, succeeded and failed
  error: null
}

export const getUserData = createAsyncThunk('set/User', async () => {
	const response = await axiosInstance.get(baseURL + '/me', { withCredentials: true });
	if (response.data.error) throw new Error(response.data.error);
	return response.data;
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }) {
		state.error = null;
		state.isLogged = true;
		state.status = 'succeeded';
		state.data = payload.user;
  
    },
	logout(state){
    localStorage.removeItem('accessToken');
    axios.get(baseURL + '/logout', { withCredentials: true });
		state.isLogged = false;
		state.error = null;
		state.isLogged = false;
		state.data = initialState.data;
		state.status = 'succeeded';
		console.log('User logged out!');
	}
  },
  extraReducers: builder => {
    builder

      // GETUSERDATA
      .addCase(getUserData.pending, (state) => {
        state.isLogged = false;
        state.error = null;
		    state.status = 'loading';
      })
      .addCase(getUserData.fulfilled, (state, {payload}) => {
        state.error = null;
		    state.data = payload.user;
		    state.isLogged = true;
		    state.status = 'succeeded';
	})
      .addCase(getUserData.rejected, (state, action) => {
        state.isLogged = false;
        state.error = action.error.message;
        state.status = 'failed';
	})
  }
})

export const { login, logout } = userSlice.actions;


export default userSlice.reducer;