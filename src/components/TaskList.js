// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleComplete, deleteTask, updateTask } from "../redux/tasksSlice"; // Import Redux actions
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import ClearIcon from "@mui/icons-material/Clear";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
// import { IconButton } from "@mui/material";

// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import CloseIcon from "@mui/icons-material/Close";
// import SaveIcon from "@mui/icons-material/Save";
// import TaskCards from "./TaskCards";
// const TaskList = () => {
//   const { tasks, completedTasks } = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();

//   const [editTaskId, setEditTaskId] = useState(null);
//   const [newText, setNewText] = useState("");
//   const [newDate, setNewDate] = useState(null);
//   const [newRepeat, setNewRepeat] = useState(false);
//   const [newReminder, setNewReminder] = useState(false);
//   const [newPriority, setNewPriority] = useState("Medium");
//   const [newImportant, setNewImportant] = useState(false);
//   const [newNotes, setNewNotes] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleEdit = (task) => {
//     setEditTaskId(task.id);
//     setNewText(task.text);
//     setNewDate(task.date ? dayjs(task.date) : null);
//     setNewRepeat(task.repeat || false);
//     setNewReminder(task.reminder || false);
//     setNewPriority(task.priority || "Medium");
//     setNewImportant(task.important || false);
//     setNewNotes(task.notes || "");
//     setIsSidebarOpen(true); // Open the sidebar
//   };

//   const handleUpdate = (id) => {
//     if (newText.trim()) {
//       dispatch(
//         updateTask({
//           id,
//           text: newText,
//           date: newDate ? newDate.toISOString() : null,
//           repeat: newRepeat,
//           reminder: newReminder,
//           priority: newPriority,
//           important: newImportant,
//           notes: newNotes,
//         })
//       );
//       setEditTaskId(null);
//       setIsSidebarOpen(false); // Close the sidebar
//     }
//   };

//   const handleCloseSidebar = () => {
//     setIsSidebarOpen(false); // Close the sidebar
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="relative">
//         {/* Task List */}

//         <div className="mt-4 space-y-6">
//           <div>
//             <TaskCards />
//           </div>
//           <div>
//             {tasks.map((task) => (
//               <div
//                 key={task.id}
//                 className={`flex flex-col space-y-2 mb-4 p-4 rounded-lg shadow ${
//                   task.important ? "bg-green-100" : "bg-gray-100"
//                 }`}
//               >
//                 <div className="flex justify-between items-center">
//                   <label className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={task.completed}
//                       onChange={() => dispatch(toggleComplete(task.id))}
//                     />
//                     <span className={`font-bold text-${task.priority}`}>
//                       {task.text} ({task.priority})
//                     </span>
//                   </label>
//                   <div className="flex space-x-2">
//                     <IconButton
//                       className="text-green-700"
//                       onClick={() => handleEdit(task)}
//                     >
//                       <EditNoteIcon />
//                     </IconButton>
//                     <IconButton
//                       className="text-red-700"
//                       onClick={() => dispatch(deleteTask(task.id))}
//                     >
//                       <ClearIcon />
//                     </IconButton>
//                     <IconButton
//                       onClick={() =>
//                         dispatch(
//                           updateTask({ ...task, important: !task.important })
//                         )
//                       }
//                       className={`text-${
//                         task.important ? "yellow-500" : "gray-500"
//                       }`}
//                     >
//                       {task.important ? <StarIcon /> : <StarBorderIcon />}
//                     </IconButton>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <h4 className="text-gray-600 font-semibold">Completed</h4>
//             {completedTasks.map((task) => (
//               <div key={task.id} className="flex items-center space-x-2">
//                 <input type="checkbox" checked readOnly />
//                 <span className="line-through">{task.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Sidebar */}
//         {isSidebarOpen && (
//           <div className="fixed top-0 right-0 h-full w-1/3 shadow-lg p-6  z-50 bg-green-50">
//             <h2 className="text-lg font-semibold mb-4"><EditNoteIcon /></h2>
//             <div className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 value={newText}
//                 onChange={(e) => setNewText(e.target.value)}
//                 className="border rounded p-2 w-full"
//                 placeholder="Task text"
//                 style={{ backgroundColor: "#d1fae5" }}
//               />

//               <DatePicker
//                 value={newDate}
//                 onChange={(date) => setNewDate(date)}
//                 renderInput={({ inputRef, inputProps, InputProps }) => (
//                   <div className="flex items-center space-x-2">
//                     <input ref={inputRef} {...inputProps} className="hidden" />
//                     <IconButton>
//                       <NotificationsNoneIcon />
//                     </IconButton>
//                     {InputProps?.endAdornment}
//                   </div>
//                 )}
//               />

//               <div className="flex items-center justify-between mt-4 relative">
//                 <IconButton
//                   onClick={() => setNewImportant(!newImportant)}
//                   className={`text-${
//                     newImportant ? "yellow-500" : "gray-500"
//                   } relative`}
//                 >
//                   {newImportant ? <StarIcon /> : <StarBorderIcon />}
//                   <label>Important</label>
//                 </IconButton>
//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
//               </div>

//               <div className="flex items-center justify-between relative">
//                 <IconButton
//                   onClick={() => setNewRepeat(!newRepeat)}
//                   className={`text-${
//                     newRepeat ? "green-600" : "gray-500"
//                   } relative`}
//                 >
//                   <RepeatIcon />
//                   <label className="ml-2">Repeat</label>
//                 </IconButton>
//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
//               </div>

//               <div className="flex items-center justify-between relative">
//                 <IconButton
//                   onClick={() => setNewReminder(!newReminder)}
//                   className={`text-${
//                     newReminder ? "green-600" : "gray-500"
//                   } relative`}
//                 >
//                   <NotificationsNoneIcon />
//                   <label className="ml-2">Reminder</label>
//                 </IconButton>
//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
//               </div>

//               <div className="flex flex-col space-y-2 relative">
//                 <label>Priority</label>
//                 <select
//                   value={newPriority}
//                   onChange={(e) => setNewPriority(e.target.value)}
//                   className="border rounded p-1"
//                   style={{ backgroundColor: "#d1fae5" }}
//                 >
//                   <option value="High">High</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </select>
//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
//               </div>

//               <div className="flex flex-col space-y-2 relative">
//                 <label>Add Notes</label>
//                 <textarea
//                   value={newNotes}
//                   onChange={(e) => setNewNotes(e.target.value)}
//                   className="border rounded p-2 w-full"
//                   placeholder="Add notes"
//                   style={{ backgroundColor: "#d1fae5" }}
//                 ></textarea>
//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
//               </div>

//               <div className="flex justify-between py-32 ">
//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
//                 <IconButton
//                   className="text-red-500"
//                   onClick={handleCloseSidebar}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <IconButton
//                   className="text-green-500"
//                   onClick={() => handleUpdate(editTaskId)}
//                 >
//                   <SaveIcon />
//                 </IconButton>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default TaskList;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask, updateTask } from "../redux/tasksSlice"; // Import Redux actions
import EditNoteIcon from "@mui/icons-material/EditNote";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RepeatIcon from "@mui/icons-material/Repeat";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import TaskCards from "./TaskCards";

const TaskList = () => {
  const { tasks, completedTasks } = useSelector((state) => state.tasks);
  const mode = useSelector((state) => state.theme.mode); // Access the theme mode from Redux
  const dispatch = useDispatch();

  const [editTaskId, setEditTaskId] = useState(null);
  const [newText, setNewText] = useState("");
  const [newDate, setNewDate] = useState(null);
  const [newRepeat, setNewRepeat] = useState(false);
  const [newReminder, setNewReminder] = useState(false);
  const [newPriority, setNewPriority] = useState("Medium");
  const [newImportant, setNewImportant] = useState(false);
  const [newNotes, setNewNotes] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleEdit = (task) => {
    setEditTaskId(task.id);
    setNewText(task.text);
    setNewDate(task.date ? dayjs(task.date) : null);
    setNewRepeat(task.repeat || false);
    setNewReminder(task.reminder || false);
    setNewPriority(task.priority || "Medium");
    setNewImportant(task.important || false);
    setNewNotes(task.notes || "");
    setIsSidebarOpen(true); // Open the sidebar
  };

  const handleUpdate = (id) => {
    if (newText.trim()) {
      dispatch(
        updateTask({
          id,
          text: newText,
          date: newDate ? newDate.toISOString() : null,
          repeat: newRepeat,
          reminder: newReminder,
          priority: newPriority,
          important: newImportant,
          notes: newNotes,
        })
      );
      setEditTaskId(null);
      setIsSidebarOpen(false); // Close the sidebar
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        className={`relative min-h-screen p-4 ${
          mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* Task List */}
        <div className="mt-4 space-y-6">
          <TaskCards />
          <div>
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex flex-col space-y-2 mb-4 p-4 rounded-lg shadow ${
                  mode === "dark"
                    ? "bg-gray-800"
                    : "bg-white border border-gray-300"
                } ${task.important ? "border-l-4 border-yellow-500" : ""}`}
              >
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => dispatch(toggleComplete(task.id))}
                      className="accent-yellow-500"
                    />
                    <span className="font-bold">{task.text}</span>
                  </label>
                  <div className="flex space-x-2">
                    <IconButton
                      className="text-yellow-500"
                      onClick={() => handleEdit(task)}
                    >
                      <EditNoteIcon  className={mode === "dark" ? "text-white" : "text-black"} />
                    </IconButton>
                    <IconButton
                      className="text-red-500"
                      onClick={() => dispatch(deleteTask(task.id))}
                    >
                      <ClearIcon   className={mode === "dark" ? "text-white" : "text-black"}/>
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        dispatch(
                          updateTask({ ...task, important: !task.important })
                        )
                      }
                      className={
                        task.important ? "text-yellow-500" : "text-gray-500"
                      }
                    >
                      {task.important ? <StarIcon  className={mode === "dark" ? "text-white" : "text-black"} /> : <StarBorderIcon  className={mode === "dark" ? "text-white" : "text-black"} />}
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Completed</h4>
            {completedTasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="accent-gray-500"
                />
                <span className="line-through">{task.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-1/3 shadow-lg p-6 z-50 ${
              mode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-green-50 text-black"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">
              <EditNoteIcon
                className={mode === "dark" ? "text-white" : "text-black"}
              />
            </h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={`border rounded p-2 w-full ${
                  mode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-green-100 text-black"
                }`}
                placeholder="Task text"
              />

              <DatePicker
                value={newDate}
                onChange={(date) => setNewDate(date)}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className={
                        mode === "dark" ? "hidden text-white" : "hidden"
                      }
                    />
                    <IconButton>
                      <NotificationsNoneIcon
                        className={
                          mode === "dark" ? "text-white" : "text-black"
                        }
                      />
                    </IconButton>
                    {InputProps?.endAdornment}
                  </div>
                )}
              />

              <div className="flex items-center justify-between mt-4 relative">
                <IconButton
                  onClick={() => setNewImportant(!newImportant)}
                  className={`${
                    newImportant
                      ? mode === "dark"
                        ? "text-yellow-400"
                        : "text-yellow-500"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {newImportant ? <StarIcon /> : <StarBorderIcon />}
                  <label
                    className={
                      mode === "dark" ? "text-white ml-2" : "text-black ml-2"
                    }
                  >
                    Important
                  </label>
                </IconButton>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
              </div>

              <div className="flex items-center justify-between relative">
                <IconButton
                  onClick={() => setNewRepeat(!newRepeat)}
                  className={`${
                    newRepeat
                      ? mode === "dark"
                        ? "text-green-400"
                        : "text-green-600"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <RepeatIcon />
                  <label
                    className={
                      mode === "dark" ? "text-white ml-2" : "text-black ml-2"
                    }
                  >
                    Repeat
                  </label>
                </IconButton>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
              </div>

              <div className="flex items-center justify-between relative">
                <IconButton
                  onClick={() => setNewReminder(!newReminder)}
                  className={`${
                    newReminder
                      ? mode === "dark"
                        ? "text-green-400"
                        : "text-green-600"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <NotificationsNoneIcon />
                  <label
                    className={
                      mode === "dark" ? "text-white ml-2" : "text-black ml-2"
                    }
                  >
                    Reminder
                  </label>
                </IconButton>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
              </div>

              <div className="flex flex-col space-y-2 relative">
                <label
                  className={mode === "dark" ? "text-white" : "text-black"}
                >
                  Priority
                </label>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                  className={`border rounded p-1 ${
                    mode === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-green-100 text-black"
                  }`}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
              </div>

              <div className="flex flex-col space-y-2 relative">
                <label
                  className={mode === "dark" ? "text-white" : "text-black"}
                >
                  Add Notes
                </label>
                <textarea
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className={`border rounded p-2 w-full ${
                    mode === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-green-100 text-black"
                  }`}
                  placeholder="Add notes"
                ></textarea>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
              </div>

              <div className="flex justify-between py-32">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-200"></div>
                <IconButton
                  className={mode === "dark" ? "text-red-400" : "text-red-500"}
                  onClick={handleCloseSidebar}
                >
                  <CloseIcon />
                </IconButton>
                <IconButton
                  className={
                    mode === "dark" ? "text-green-400" : "text-green-500"
                  }
                  onClick={() => handleUpdate(editTaskId)}
                >
                  <SaveIcon />
                </IconButton>
              </div>
            </div>
          </div>
        )}
        {isSidebarOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-1/3 shadow-lg p-6 z-50 ${
              mode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-green-50 text-black"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">
              <EditNoteIcon
                className={mode === "dark" ? "text-white" : "text-black"}
              />
            </h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={`border rounded p-2 w-full ${
                  mode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-green-100 text-black"
                }`}
                placeholder="Task text"
              />

              <DatePicker
                value={newDate}
                onChange={(date) => setNewDate(date)}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className={
                        mode === "dark" ? "hidden text-white" : "hidden"
                      }
                    />
                    <IconButton>
                      <NotificationsNoneIcon
                        className={
                          mode === "dark" ? "text-white" : "text-black"
                        }
                      />
                    </IconButton>
                    {InputProps?.endAdornment}
                  </div>
                )}
              />

              <div className="flex items-center justify-between mt-4 relative">
                <IconButton
                  onClick={() => setNewImportant(!newImportant)}
                  className={`${
                    newImportant
                      ? mode === "dark"
                        ? "text-yellow-400"
                        : "text-yellow-500"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {newImportant ? (
                    <StarIcon
                      className={mode === "dark" ? "text-white" : "text-black"}
                    />
                  ) : (
                    <StarBorderIcon
                      className={mode === "dark" ? "text-white" : "text-black"}
                    />
                  )}
                  <label
                    className={
                      mode === "dark" ? "text-white ml-2" : "text-black ml-2"
                    }
                  >
                    Important
                  </label>
                </IconButton>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px ${
                    mode === "dark" ? "bg-gray-500" : "bg-green-200"
                  }`}
                ></div>
              </div>

              <div className="flex items-center justify-between relative">
                <IconButton
                  onClick={() => setNewRepeat(!newRepeat)}
                  className={`${
                    newRepeat
                      ? mode === "dark"
                        ? "text-green-400"
                        : "text-green-600"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <RepeatIcon
                    className={mode === "dark" ? "text-white" : "text-black"}
                  />
                  <label
                    className={
                      mode === "dark" ? "text-white ml-2" : "text-black ml-2"
                    }
                  >
                    Repeat
                  </label>
                </IconButton>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px ${
                    mode === "dark" ? "bg-gray-500" : "bg-green-200"
                  }`}
                ></div>
              </div>

              <div className="flex items-center justify-between relative">
                <IconButton
                  onClick={() => setNewReminder(!newReminder)}
                  className={`${
                    newReminder
                      ? mode === "dark"
                        ? "text-green-400"
                        : "text-green-600"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <NotificationsNoneIcon
                    className={mode === "dark" ? "text-white" : "text-black"}
                  />
                  <label
                    className={
                      mode === "dark" ? "text-white ml-2" : "text-black ml-2"
                    }
                  >
                    Reminder
                  </label>
                </IconButton>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px ${
                    mode === "dark" ? "bg-gray-500" : "bg-green-200"
                  }`}
                ></div>
              </div>

              {/* Priority Section */}
              <div className="flex flex-col space-y-2 relative">
                <label
                  className={mode === "dark" ? "text-white" : "text-black"}
                >
                  Priority
                </label>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                  className={`border rounded p-1 ${
                    mode === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-green-100 text-black"
                  }`}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              {/* Notes Section */}
              <div className="flex flex-col space-y-2 relative">
                <label
                  className={mode === "dark" ? "text-white" : "text-black"}
                >
                  Add Notes
                </label>
                <textarea
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className={`border rounded p-2 w-full ${
                    mode === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-green-100 text-black"
                  }`}
                  placeholder="Add notes"
                ></textarea>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-between py-32">
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px ${
                    mode === "dark" ? "bg-white" : "bg-white-200"
                  }`}
                ></div>
                <IconButton
                  className={mode === "dark" ? "bg-white" : "bg-white"}
                  onClick={handleCloseSidebar}
                >
                  <CloseIcon
                    className={mode === "dark" ? "text-white" : "text-black"}
                  />
                </IconButton>
                <IconButton
                  className={mode === "dark" ? "bg-white" : "bg-white"}
                  onClick={() => handleUpdate(editTaskId)}
                >
                  <SaveIcon
                    className={mode === "dark" ? "text-white" : "text-black"}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default TaskList;
