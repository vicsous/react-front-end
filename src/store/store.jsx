import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../store/userSlice';
import counterSlice from './counterSlice';
import themeSlice from './themeSlice';

export default configureStore({
  reducer: {
    user: userSlice, 
    counter: counterSlice,
    theme: themeSlice
  }
});
