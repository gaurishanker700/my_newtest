// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/tasksSlice";

// const AddTask = () => {
//   const [taskText, setTaskText] = useState("");
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (taskText.trim()) {
//       dispatch(addTask(taskText));
//       setTaskText("");
//     }
//   };

//   return (
//     <div className="flex items-center justify-between bg-green-100 p-4 rounded">
//       <input
//         type="text"
//         placeholder="Add A Task"
//         value={taskText}
//         onChange={(e) => setTaskText(e.target.value)}
//         className="bg-transparent w-full outline-none"
//       />
//       <button
//         className="text-green-600 font-semibold"
//         onClick={handleAddTask}
//       >
//         ADD TASK
//       </button>
//     </div>
//   );
// };

// export default AddTask;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/tasksSlice";
// import { IconButton, TextField } from "@mui/material";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const AddTask = () => {
//   const [taskText, setTaskText] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [repeat, setRepeat] = useState(false);
//   const [reminder, setReminder] = useState(false);
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (taskText.trim()) {
//       const taskDetails = {
//         text: taskText,
//         date: selectedDate,
//         repeat,
//         reminder,
//       };
//       dispatch(addTask(taskDetails));
//       setTaskText("");
//       setSelectedDate(null);
//       setRepeat(false);
//       setReminder(false);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="flex items-center justify-between bg-green-100 p-4 rounded shadow-md">
//         <input
//           type="text"
//           placeholder="Add A Task"
//           value={taskText}
//           onChange={(e) => setTaskText(e.target.value)}
//           className="bg-transparent w-full outline-none text-gray-800 mr-4"
//         />

//         <div className="flex items-center space-x-2">
//           {/* Reminder Icon */}
//           <IconButton
//             onClick={() => setReminder(!reminder)}
//             className={`text-${reminder ? "green-600" : "gray-500"}`}
//           >
//             <NotificationsNoneIcon />
//           </IconButton>

//           {/* Repeat Icon */}
//           <IconButton
//             onClick={() => setRepeat(!repeat)}
//             className={`text-${repeat ? "green-600" : "gray-500"}`}
//           >
//             <RepeatIcon />
//           </IconButton>

//           {/* Calendar Icon */}
//           <DatePicker
//             value={selectedDate}
//             onChange={(date) => setSelectedDate(date)}
//             renderInput={(params) => (
//               <IconButton {...params} className="text-gray-500">
//                 <CalendarTodayIcon />
//               </IconButton>
//             )}
//           />
//         </div>

//         <button
//           className="ml-4 bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600"
//           onClick={handleAddTask}
//         >
//           ADD TASK
//         </button>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default AddTask;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/tasksSlice";
// import { IconButton } from "@mui/material";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const AddTask = () => {
//   const [taskText, setTaskText] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [repeat, setRepeat] = useState(false);
//   const [reminder, setReminder] = useState(false);
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (taskText.trim()) {
//       const taskDetails = {
//         text: taskText,
//         date: selectedDate ? selectedDate.toISOString() : null,
//         repeat,
//         reminder,
//       };
//       dispatch(addTask(taskDetails));
//       setTaskText("");
//       setSelectedDate(null);
//       setRepeat(false);
//       setReminder(false);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="flex items-center justify-between bg-green-100 p-4 rounded shadow-md">
//         <input
//           type="text"
//           placeholder="Add A Task"
//           value={taskText}
//           onChange={(e) => setTaskText(e.target.value)}
//           className="bg-transparent w-full outline-none text-gray-800 mr-4"
//         />

//         <div className="flex items-center space-x-2">
//           {/* Reminder Icon */}
//           <IconButton
//             onClick={() => setReminder(!reminder)}
//             className={`text-${reminder ? "green-600" : "gray-500"}`}
//           >
//             <NotificationsNoneIcon />
//           </IconButton>

//           {/* Repeat Icon */}
//           <IconButton
//             onClick={() => setRepeat(!repeat)}
//             className={`text-${repeat ? "green-600" : "gray-500"}`}
//           >
//             <RepeatIcon />
//           </IconButton>

//           {/* Calendar Icon */}
//           <DatePicker
//             value={selectedDate}
//             onChange={(date) => setSelectedDate(date)}
//             renderInput={({ inputRef, inputProps, InputProps }) => (
//               <div className="flex items-center space-x-2">
//                 <input
//                   ref={inputRef}
//                   {...inputProps}
//                   className="hidden" // Hide default text field
//                 />
//                 <IconButton className="text-gray-500">
//                   <CalendarTodayIcon />
//                 </IconButton>
//                 {InputProps?.endAdornment}
//               </div>
//             )}
//           />
//         </div>

//         <button
//           className="ml-4 bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600"
//           onClick={handleAddTask}
//         >
//           ADD TASK
//         </button>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default AddTask;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/tasksSlice";
// import { IconButton } from "@mui/material";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const AddTask = () => {
//   const [taskText, setTaskText] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [repeat, setRepeat] = useState(false);
//   const [reminder, setReminder] = useState(false);
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (taskText.trim()) {
//       const taskDetails = {
//         text: taskText,
//         date: selectedDate ? selectedDate.toISOString() : null,
//         repeat,
//         reminder,
//       };
//       dispatch(addTask(taskDetails));
//       setTaskText("");
//       setSelectedDate(null);
//       setRepeat(false);
//       setReminder(false);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="bg-green-100 p-4 rounded shadow-md">
//         {/* Input Field */}
//         <input
//           type="text"
//           placeholder="Add A Task"
//           value={taskText}
//           onChange={(e) => setTaskText(e.target.value)}
//           className="bg-transparent w-full outline-none text-gray-800 p-2 border-b border-gray-300 mb-4"
//         />

//         {/* Icons Row */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             {/* Reminder Icon */}
//             <IconButton
//               onClick={() => setReminder(!reminder)}
//               className={`text-${reminder ? "green-600" : "gray-500"}`}
//             >
//               <NotificationsNoneIcon />
//             </IconButton>

//             {/* Repeat Icon */}
//             <IconButton
//               onClick={() => setRepeat(!repeat)}
//               className={`text-${repeat ? "green-600" : "gray-500"}`}
//             >
//               <RepeatIcon />
//             </IconButton>

//             {/* Calendar Icon */}
//             <DatePicker
//               value={selectedDate}
//               onChange={(date) => setSelectedDate(date)}
//               renderInput={({ inputRef, inputProps, InputProps }) => (
//                 <div className="flex items-center">
//                   <input
//                     ref={inputRef}
//                     {...inputProps}
//                     className="hidden" // Hide the text field
//                   />
//                   <IconButton className="text-gray-500">
//                     <CalendarTodayIcon />
//                   </IconButton>
//                   {InputProps?.endAdornment}
//                 </div>
//               )}
//             />
//           </div>

//           {/* Add Task Button */}
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600"
//             onClick={handleAddTask}
//           >
//             ADD TASK
//           </button>
//         </div>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default AddTask;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RepeatIcon from "@mui/icons-material/Repeat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dayjs from "dayjs";
import { addTask } from "../redux/tasksSlice"; // Import your addTask action

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      const taskDetails = {
        text: taskText,
        date: selectedDate ? selectedDate.toISOString() : null,
        repeat,
        reminder,
      };
      dispatch(addTask(taskDetails));
      setTaskText("");
      setSelectedDate(null);
      setRepeat(false);
      setReminder(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg-green-100 p-4 rounded shadow-md">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Add A Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="bg-transparent w-full outline-none text-gray-800 p-2 border-b border-gray-300 mb-4"
        />

        {/* Icons Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Reminder Icon */}
            <IconButton
              onClick={() => setReminder(!reminder)}
              className={`text-${reminder ? "green-600" : "gray-500"}`}
            >
              <NotificationsNoneIcon />
            </IconButton>

            {/* Repeat Icon */}
            <IconButton
              onClick={() => setRepeat(!repeat)}
              className={`text-${repeat ? "green-600" : "gray-500"}`}
            >
              <RepeatIcon />
            </IconButton>

            {/* Calendar Icon */}
            <IconButton
              className="text-gray-500"
              onClick={() => setIsDatePickerOpen(true)}
            >
              <CalendarTodayIcon />
            </IconButton>
            {isDatePickerOpen && (
              <DatePicker
                open={isDatePickerOpen}
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setIsDatePickerOpen(false);
                }}
                onClose={() => setIsDatePickerOpen(false)}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <div className="hidden">
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </div>
                )}
              />
            )}
          </div>

          {/* Add Task Button */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600"
            onClick={handleAddTask}
          >
            ADD TASK
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default AddTask;
