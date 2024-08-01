import React, { useState } from 'react';


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    event.preventDefault();
    setNewTask(event.target.value);
  }

  function addTasks() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function delTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTasks();
    }
  }

  return (
    <div className='todo'>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder='Enter a Task'
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className='add-btn'
          onClick={addTasks}
        >
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='del-btn' onClick={() => delTask(index)}>Delete</button>
            <button className='move-btn' onClick={() => moveTaskUp(index)}>⬆️</button>
            <button className='move-btn' onClick={() => moveTaskDown(index)}>⬇️</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
