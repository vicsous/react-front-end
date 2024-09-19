import { createSlice } from '@reduxjs/toolkit';


export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: localStorage.getItem('theme'),
  },
  reducers: {
    setTheme(state) {
      	const currentTheme = localStorage.getItem('theme');
    	if (currentTheme === 'light') {
        	localStorage.setItem('theme', 'dark')
        	state.theme = 'dark'
      	} 
      	else {
    		localStorage.setItem('theme', 'light')
        	state.theme = 'light'
      }
	  state.status = 'succeeded'
    }
}})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;