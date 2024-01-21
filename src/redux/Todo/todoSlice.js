import { createSlice } from '@reduxjs/toolkit';

let todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: {
            data: []
        }
    },
    reducers: {
        addTask: (state, action) => {
            try {
                console.log(action.payload);
                state.value.data = [...state.value.data, { id: state.value.data.length + 1, description: action.payload.discription, title:action.payload.title,status: "Active", addedTime: new Date() }]
                console.log(state.value.data);
            } catch (err) {
                console.log(err);
            }
        },
    },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
