import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="flex items-center justify-between border-b p-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
      </div>
      <button onClick={handleDelete} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
