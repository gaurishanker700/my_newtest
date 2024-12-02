// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [
//     {
//       id: 1,
//       text: "Buy groceries",
//       completed: false,
//       date: null,
//       reminder: false,
//       repeat: false,
//       priority: "Medium",
//     },
//     {
//       id: 2,
//       text: "Finish project report",
//       completed: false,
//       important: true,
//       date: null,
//       reminder: false,
//       repeat: false,
//       priority: "High",
//     },
//     {
//       id: 3,
//       text: "Call the bank",
//       completed: false,
//       date: null,
//       reminder: false,
//       repeat: false,
//       priority: "Low",
//     },
//   ],
//   completedTasks: [
//     {
//       id: 4,
//       text: "Read a book",
//       completed: true,
//       date: null,
//       reminder: false,
//       repeat: false,
//       priority: "Medium",
//     },
//   ],
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       const { text, date, reminder, repeat, priority } = action.payload;
//       state.tasks.push({
//         id: Date.now(),
//         text,
//         date,
//         reminder,
//         repeat,
//         priority: priority || "Medium", // Default to Medium priority
//         completed: false,
//       });
//     },
//     toggleComplete: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//         if (task.completed) {
//           state.completedTasks.push(task);
//           state.tasks = state.tasks.filter((t) => t.id !== action.payload);
//         } else {
//           state.tasks.push(task);
//           state.completedTasks = state.completedTasks.filter(
//             (t) => t.id !== action.payload
//           );
//         }
//       }
//     },
//     deleteTask: (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//       state.completedTasks = state.completedTasks.filter(
//         (task) => task.id !== action.payload
//       );
//     },
//     updateTask: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload.id);
//       if (task) {
//         task.text = action.payload.text;
//         task.date = action.payload.date;
//         task.reminder = action.payload.reminder;
//         task.repeat = action.payload.repeat;
//         task.priority = action.payload.priority;
//       }
//     },
//     toggleRepeat: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.repeat = !task.repeat;
//         if (task.repeat) {
//           state.tasks.push({
//             ...task,
//             id: Date.now(),
//             text: `${task.text} (Repeated)`,
//           });
//         }
//       }
//     },
//     toggleReminder: (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.reminder = !task.reminder;
//         // Placeholder: Logic to trigger reminders can be added here
//         if (task.reminder) {
//           console.log(`Reminder set for task: ${task.text}`);
//         }
//       }
//     },
//   },
// });

// export const {
//   addTask,
//   toggleComplete,
//   deleteTask,
//   updateTask,
//   toggleRepeat,
//   toggleReminder,
// } = tasksSlice.actions;
// export default tasksSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("http://localhost:5000/api/tasks");
  return response.data;
});

// Initial state
const initialState = {
  tasks: [
    {
      id: 1,
      text: "Buy groceries",
      completed: false,
      date: null,
      reminder: false,
      repeat: false,
      priority: "Medium",
    },
    {
      id: 2,
      text: "Finish project report",
      completed: false,
      important: true,
      date: null,
      reminder: false,
      repeat: false,
      priority: "High",
    },
    {
      id: 3,
      text: "Call the bank",
      completed: false,
      date: null,
      reminder: false,
      repeat: false,
      priority: "Low",
    },
  ],
  completedTasks: [
    {
      id: 4,
      text: "Read a book",
      completed: true,
      date: null,
      reminder: false,
      repeat: false,
      priority: "Medium",
    },
  ],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// Task slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { text, date, reminder, repeat, priority } = action.payload;
      state.tasks.push({
        id: Date.now(),
        text,
        date,
        reminder,
        repeat,
        priority: priority || "Medium", // Default priority
        completed: false,
      });
    },
    toggleComplete: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        if (task.completed) {
          state.completedTasks.push(task);
          state.tasks = state.tasks.filter((t) => t.id !== taskId);
        } else {
          state.tasks.push(task);
          state.completedTasks = state.completedTasks.filter(
            (t) => t.id !== taskId
          );
        }
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== taskId
      );
    },
    updateTask: (state, action) => {
      const { id, text, date, reminder, repeat, priority } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.text = text;
        task.date = date;
        task.reminder = reminder;
        task.repeat = repeat;
        task.priority = priority;
      }
    },
    toggleRepeat: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.repeat = !task.repeat;
        if (task.repeat) {
          state.tasks.push({
            ...task,
            id: Date.now(),
            text: `${task.text} (Repeated)`,
          });
        }
      }
    },
    toggleReminder: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.reminder = !task.reminder;
        if (task.reminder) {
          console.log(`Reminder set for task: ${task.text}`);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload.tasks;
        state.completedTasks = action.payload.completedTasks;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {
  addTask,
  toggleComplete,
  deleteTask,
  updateTask,
  toggleRepeat,
  toggleReminder,
} = tasksSlice.actions;

export default tasksSlice.reducer;
