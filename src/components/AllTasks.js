import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice"; // Adjust import path accordingly

const AllTasks = () => {
  const dispatch = useDispatch();
  const { tasks, status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading tasks...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border border-gray-300 shadow rounded p-4 bg-white hover:shadow-lg"
        >
          <h2 className="text-lg font-semibold text-gray-800">{task.text}</h2>
          <p className="text-sm text-gray-500">
            Priority: <span className="font-medium">{task.priority}</span>
          </p>
          <p className="text-sm text-gray-500">
            Reminder: <span>{task.reminder ? "Yes" : "No"}</span>
          </p>
          <p className="text-sm text-gray-500">
            Completed: <span>{task.completed ? "Yes" : "No"}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
