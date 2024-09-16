import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

export const newNote = createAsyncThunk('post/Note', async (text) => {
    const query = `#graphql
        mutation setNote($text: String!){
            note(text: $text) {
                text
                createdAt
            }
        }
    `;
    const variables = {
        text: text
    };
    const response = await axiosInstance.post(baseURL, { query, variables }, { withCredentials: true });
    if (response.data.errors) throw new Error (response.data.errors[0].message);
    return response.data.data.note;
})

const initialState = {
    status: 'idle', // idle, loading, succeeded and failed
    error: null
}
  
export const postSlice = createSlice({
    name: 'note',
    initialState,
    reducers: null,
    extraReducers: builder => {
        builder
        .addCase(newNote.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(newNote.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log(action)
            state.error = null;
        })
        .addCase(newNote.rejected, (state, action) => {
            state.status = 'failed';
            console.log(action)
            state.error = action.error.message;
        })
    }
})
  
export default postSlice.reducer;