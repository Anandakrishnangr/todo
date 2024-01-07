import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Todo/userSlice";
import appSlice from "./Todo/appSlice";
export default configureStore({
    reducer: {
        user: userSlice,
        app: appSlice
    },
});
