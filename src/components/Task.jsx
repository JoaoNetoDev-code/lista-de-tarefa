import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

import './Task.css'

const Task = ({task, handleTasksClick, handleTasksRemove}) => {
  const navigate = useNavigate()

  const handleTaskDetailsClick = (taskTitle) => {
    navigate(`/${taskTitle}`)
  }
  return (
    <div
        className="task-container"
        style={ task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
    >
      <div className="task-title" onClick={() => handleTasksClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
      <button
          className="see-task-details-button"
          onClick={() => handleTaskDetailsClick(task.title)}
        >
          <CgInfo/>
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTasksRemove(task.id)}
        >
          <CgClose/>
        </button>
      </div>
    </div>
  )
}

export default Task;
