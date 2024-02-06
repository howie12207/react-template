import { createSlice } from '@reduxjs/toolkit';

export const baseSlice = createSlice({
    name: 'base',
    initialState: {
        loading: false,
    },
    reducers: {
        updateLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { updateLoading } = baseSlice.actions;
export default baseSlice.reducer;
