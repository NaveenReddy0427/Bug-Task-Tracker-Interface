import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import tasksSlice from "./slices/tasksSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        tasks: tasksSlice
    },
    devTools: true
})

export default store;