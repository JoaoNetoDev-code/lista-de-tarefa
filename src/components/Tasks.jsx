import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTasksClick, handleTasksRemove }) => {
  return (
    <div>
      {tasks
        .map((task) => (
          <Task
            task={task}
            key={task.id}
            handleTasksRemove={handleTasksRemove}
            handleTasksClick={handleTasksClick}
          />
        ))}
    </div>
  )
}

export default Tasks;
