// import { configureStore } from '@reduxjs/toolkit';
// import tasksReducer from './tasksSlice'; // Ensure tasksSlice is correctly referenced


// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });


// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice"; // Task slice
import themeReducer from "./themeSlice"; // Theme slice

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer, // Ensure themeReducer is added here
  },
});

