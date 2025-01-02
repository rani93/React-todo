import './App.css';

import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      alert("Please fill out the task");
      return;
    }
    setTasks([...tasks, { text: newTask, isEditing: false }]);
    setNewTask('');
  };

  const handleEditTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
  };

  const handleSaveTask = (index, updatedText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: updatedText, isEditing: false } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <header>
        <h1 className='title'>Task List 2025</h1>
        <form  className='new-task-form' onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="What's your plan?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" id='new-task-submit'>Add Task</button>
        </form>
      </header>
      <main>
        <section className="task-list">
          <h2 className='title'>Task</h2>
          <div id="tasks">
            {tasks.map((task, index) => (
              <div key={index} className="task">
                <div className="content">
                  {task.isEditing ? (
                    <input
                      type="text"
                      className="text"
                      defaultValue={task.text}
                      onBlur={(e) => handleSaveTask(index, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <input
                      type="text"
                      className="text"
                      value={task.text}
                      readOnly
                    />
                  )}
                </div>
                <div className="action">
                  <button className="edit" onClick={() => handleEditTask(index)}>
                    {task.isEditing ? 'Save' : 'Edit'}
                  </button>
                  <button className="delete" onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
