import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

const initialState = {
  data: {
    username: '',
    name: '',
    email: '',
    roles: [],
    notes: []
  },
  theme: localStorage.getItem('theme'),
  isLogged: false,
  status: 'idle', // idle, loading, succeeded and failed
  error: null
}

export const login = createAsyncThunk('fetch/User', async (userData) => {
  const query = `#graphql
    mutation Login($userdata: loginInput) {
      login(userdata: $userdata) {
        username
        name
        email
        roles
        token
      }
    }
  `;
  const variables = {
    userdata: {
      email: userData.email,
      password: userData.password
    }
  };
  const response = await axiosInstance.post(baseURL, { query, variables }, { withCredentials: true });
  if (response.data.errors) throw new Error (response.data.errors[0].message);
  return {
    user: response.data.data.login
  }
})

export const getUserData = createAsyncThunk('set/User', async () => {
  try {
    const query = `#graphql
      query userData{
        userData {
          username
          name
          email
          roles
          token
        }
      }
    `;
    const response = await axiosInstance.post(baseURL, { query }, { withCredentials: true });
    if (response.data.errors) throw new Error (response.data.errors[0].message);
    return {
      user: response.data.data.userData
    }
  } catch (e) {
    if (e.message!='No token') throw new Error(e);
  }
})

export const signup = createAsyncThunk('post/User', async (userData) => {
  const response =  await axiosInstance.post(baseURL, userData, { withCredentials: true });
  if (response.data.error) throw response.data.error;
  return {
    accessToken: response.data.accessToken,
    user: response.data.user
  }
})

export const logout = createAsyncThunk('clear/User', async () => {
  const query = `#graphql
    mutation Logout {
      logout
    }
  `;
  const response =  await axiosInstance.post(baseURL, { query }, { withCredentials: true });
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'light') {
        localStorage.setItem('theme', 'dark')
        state.theme = 'dark'
      } 
      else {
        localStorage.setItem('theme', 'light')
        state.theme = 'light'
      }
    }
  },
  extraReducers: builder => {
    builder
  
      // LOGIN
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLogged = true;
        state.data = action.payload.user
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // GETUSERDATA
      .addCase(getUserData.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLogged = true;
        state.data = action.payload.user
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.isLogged = false;
        state.error = action.error.message;
      })

      // SIGNUP
      .addCase(signup.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLogged = true;
        state.data = action.payload.user
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.isLogged = false;
        state.error = action.error.message;
      })

      // LOGOUT
      .addCase(logout.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.isLogged = false;
        state.data = initialState.data
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.isLogged = true;
        state.error = action.error.message;
      })
    }
})

export const { setTheme } = userSlice.actions;


export default userSlice.reducer;