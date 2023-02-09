

import React, { useState } from "react";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task: inputValue, date: new Date() }]);
    setInputValue("");
  };

  return (
    <div>
      <h1>Task Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - {task.date.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
