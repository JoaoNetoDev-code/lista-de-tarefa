import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";


import Header from "./components/Header";
import MainContent from "./components/MainContent";

import './App.css';
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }
    fetchTasks()
  },[])

  const handleTaskAddition = (taskTitle) => {
    const newtasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newtasks);
  };

  const handleTasksClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: true };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTasksRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MainContent
              tasks={tasks}
              handleTaskAddition={handleTaskAddition}
              handleTasksRemove={handleTasksRemove}
              handleTasksClick={handleTasksClick}
            />}
          />
        <Route
          path="/:taskTitle"
          exact
          Component={TaskDetails}
        />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
