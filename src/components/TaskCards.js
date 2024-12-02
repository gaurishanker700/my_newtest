// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchTasks } from "../redux/tasksSlice"; // Assuming the slice is set up
// import {
//   Card,
//   CardContent,
//   Typography,
//   IconButton,
//   Box,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// const TaskCards = () => {
//   const dispatch = useDispatch();
//   const { tasks, loading, error } = useSelector((state) => state.tasks);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   if (loading) return <Typography>Loading tasks...</Typography>;
//   if (error) return <Typography>Error fetching tasks: {error}</Typography>;

//   return (
//     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 2 }}>
//       {tasks.map((task) => (
//         <Card
//           key={task.id}
//           sx={{
//             maxWidth: 300,
//             minWidth: 250,
//             backgroundColor: "white", // Set background color to white for all tasks
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add subtle shadow for the card
//           }}
//         >
//           <CardContent>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               {/* Checkbox with task text */}
//               <FormControlLabel
//                 control={<Checkbox />}
//                 label={
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: "bold",
//                       textDecoration: task.completed ? "line-through" : "none",
//                       color: task.completed ? "gray" : "black",
//                     }}
//                   >
//                     {task.text}
//                   </Typography>
//                 }
//                 onChange={() => {
//                   // Dispatch action to toggle task completion
//                   // Example: dispatch(toggleTaskCompletion(task.id))
//                 }}
//               />

//               {/* Star icon on the right */}
//               <IconButton
//                 color={task.important ? "warning" : "default"}
//                 onClick={() => {
//                   // Dispatch action to toggle importance
//                   // Example: dispatch(toggleImportant(task.id))
//                 }}
//                 sx={{ marginLeft: "auto" }}
//               >
//                 {task.important ? <StarIcon /> : <StarBorderIcon />}
//               </IconButton>
//             </Box>

//             {/* Additional task details */}
//             <Typography variant="body2" color="textSecondary">
//               Priority: {task.priority}
//             </Typography>
//             {task.date && (
//               <Typography variant="body2" color="textSecondary">
//                 Due: {new Date(task.date).toLocaleDateString()}
//               </Typography>
//             )}
//             {task.notes && (
//               <Typography
//                 variant="body2"
//                 color="textSecondary"
//                 sx={{ mt: 1, fontStyle: "italic" }}
//               >
//                 Notes: {task.notes}
//               </Typography>
//             )}
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default TaskCards;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice"; // Assuming the slice is set up
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const TaskCards = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const mode = useSelector((state) => state.theme.mode); // Get current theme from Redux

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <Typography>Loading tasks...</Typography>;
  if (error) return <Typography>Error fetching tasks: {error}</Typography>;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 2 }}>
      {tasks.map((task) => (
        <Card
          key={task.id}
          sx={{
            maxWidth: 300,
            minWidth: 250,
            backgroundColor: mode === "dark" ? "gray.800" : "white", // Dark background for dark mode
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add subtle shadow for the card
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Checkbox with task text */}
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textDecoration: task.completed ? "line-through" : "none",
                      color:
                        mode === "dark"
                          ? "black"
                          : task.completed
                          ? "gray"
                          : "black", // White text in dark mode
                    }}
                  >
                    {task.text}
                  </Typography>
                }
                onChange={() => {
                  // Dispatch action to toggle task completion
                  // Example: dispatch(toggleTaskCompletion(task.id))
                }}
              />

              {/* Star icon on the right */}
              <IconButton
                color={task.important ? "warning" : "default"}
                onClick={() => {
                  // Dispatch action to toggle importance
                  // Example: dispatch(toggleImportant(task.id))
                }}
                sx={{ marginLeft: "auto" }}
              >
                {task.important ? (
                  <StarIcon
                    sx={{ color: mode === "dark" ? "white" : "inherit" }}
                  />
                ) : (
                  <StarBorderIcon
                    sx={{ color: mode === "dark" ? "white" : "inherit" }}
                  />
                )}
              </IconButton>
            </Box>

            {/* Additional task details */}
            <Typography
              variant="body2"
              color={mode === "dark" ? "black" : "textSecondary"}
            >
              Priority: {task.priority}
            </Typography>
            {task.date && (
              <Typography
                variant="body2"
                color={mode === "dark" ? "black" : "textSecondary"}
              >
                Due: {new Date(task.date).toLocaleDateString()}
              </Typography>
            )}
            {task.notes && (
              <Typography
                variant="body2"
                color={mode === "dark" ? "black" : "textSecondary"}
                sx={{ mt: 1, fontStyle: "italic" }}
              >
                Notes: {task.notes}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TaskCards;
