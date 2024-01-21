import { createSlice } from '@reduxjs/toolkit';

let todoSlice = createSlice({
    name: 'todo',
    initialState: {

        data: []

    },
    reducers: {
        addTask: (state, action) => {
            try {
                console.log(action.payload);
                state.data = [...state.data, { id: state.data.length + 1, description: action.payload, status: "pending", addedTime: new Date() }]
                console.log(state.data);
            } catch (err) {
                console.log(err);
            }
        },
        deleteTask: (state, action) => {
            try {
                console.log(action.payload);
                state.data = state.data.filter((items) => !action.payload.includes(items.id))
            } catch (error) {
                console.log(error);

            }
        }
    },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
