import { createSlice } from '@reduxjs/toolkit';

let userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            UserName: null,
        },
    },
    reducers: {
        addUser: (state, action) => {
            try {
                console.log(action.payload);
                let item = action.payload
                state.value.Country = item.Country
                state.value.quickLocation = item.quickLocation
            } catch (err) {
                console.log(err);
            }
        },
    },
});

export const { addUser
 } = userSlice.actions;
export default userSlice.reducer;
