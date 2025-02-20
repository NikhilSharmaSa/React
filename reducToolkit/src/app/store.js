import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice.js'
import usersReducer from '../features/user/userSlice.js'
export const store =configureStore({
    reducer:{todos:todoReducer,users:usersReducer}
})