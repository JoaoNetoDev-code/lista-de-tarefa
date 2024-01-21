import React from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks"

const MainContent = ({tasks, handleTaskAddition, handleTasksRemove, handleTasksClick }) => {
  return (
    <>
      <AddTask
                  handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTasksClick={handleTasksClick}
                  handleTasksRemove={handleTasksRemove}
              />
    </>
  )
}

export default MainContent