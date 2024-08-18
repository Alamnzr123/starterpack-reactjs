import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUsersAction = createAsyncThunk(
    "Users/postLogin",
    async ({ data, saveImg }, { rejectWithValue }) => {
        try {
            if (
                data.username === "" ||
                data.password === ""
            ) {
                return rejectWithValue("Input is empty");
            }

            const formData = new FormData();
            formData.append("id", data.id);
            formData.append("username", data.username);
            formData.append("password", data.password);

            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, formData);

        } catch (error) {
            return rejectWithValue("Add User error");
        }
    },
);


const addUsersSlice = createSlice({
    name: "postLogin",
    initialState: {
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        // add
        builder.addCase(addUsersAction.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(addUsersAction.fulfilled, (state) => {
            state.isLoading = false;
        });

        builder.addCase(addUsersAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action?.payload;
        });
    },
});

export default addUsersSlice.reducer;