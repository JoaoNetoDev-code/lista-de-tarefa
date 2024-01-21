import React, { useState } from "react";
import Button from "./Button";
import './AddTask.css'

const AddTask = ({handleTaskAddition}) => {
  const [inputDate, setInputDate] = useState('');

  const handleInputChange = (e) => {
    setInputDate(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputDate)
    setInputDate('')
  }

  return (
    <div className="add-task-container">
      <input
        value={inputDate}
        onChange={handleInputChange}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}

export default AddTask;
