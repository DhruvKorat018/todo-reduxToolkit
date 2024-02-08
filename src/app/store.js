import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todoFeatures/todoSlice'

export const store = configureStore({
    reducer: todoReducer,
})
