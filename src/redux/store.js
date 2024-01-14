import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Todo/userSlice";
import appSlice from "./Todo/appSlice";
import todoSlice from "./Todo/todoSlice";
export default configureStore({
    reducer: {
        user: userSlice,
        app: appSlice,
        todo:todoSlice
    },
});
