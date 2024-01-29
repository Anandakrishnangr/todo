import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import userSlice from "./Todo/userSlice";
import appSlice from "./Todo/appSlice";
import todoSlice from "./Todo/todoSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web4
import { persistStore } from 'redux-persist';

// export const store = configureStore({
//     reducer: {
//         user: userSlice,
//         app: appSlice,
//         todo: todoSlice
//     },
// });
const rootReducer = combineReducers({
    user: userSlice,
    app: appSlice,
    todo: todoSlice,
    // Add other reducers as needed
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});
 const presistor = persistStore(store);
 export {presistor,store}