import { createSlice } from '@reduxjs/toolkit';

let userSlice = createSlice({
    name: 'user',
    initialState: {
        UserName: null,

    },
    reducers: {
        addUser: (state, action) => {
            try {
                console.log(action.payload);
                let userName = action.payload
                state.UserName = userName
            } catch (err) {
                console.log(err);
            }
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
