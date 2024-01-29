import { createSlice } from '@reduxjs/toolkit';

let todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            try {
                if (action) {
                    console.log(state, action.payload);
                    state = [...state, { id: state.length + 1, description: action.payload.description, title: action.payload.title, status: "pending", addedTime: new Date() }]
                    return state
                }
            } catch (err) {
                console.log(err);
            }
        },
        deleteTask: (state, action) => {
            try {
                console.log(action.payload);
                state = state.filter((items) => !action.payload.includes(items.id))
                return state
            } catch (error) {
                console.log(error);

            }
        },
        updateTask: (state, action) => {
            try {
                console.log(action)
                state = action.payload
                return state
            } catch (error) {
                console.log(error)
            }
        }
    },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
