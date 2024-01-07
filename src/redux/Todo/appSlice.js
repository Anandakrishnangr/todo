import { createSlice } from '@reduxjs/toolkit';

let appSlice = createSlice({
    name: 'app',
    initialState: {
        value: {
            splash: true,
        },
    },
    reducers: {
        updateApp: (state, action) => {
            try {
                console.log(action.payload);
                state.value.splash = action.payload
            } catch (err) {
                console.log(err);
            }
        },
    },
});

export const { updateApp } = appSlice.actions;
export default appSlice.reducer;
