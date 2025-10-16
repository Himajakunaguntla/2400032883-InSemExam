import React, { useState } from 'react'

const Todolist = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task])
      setTask('')
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>To-Do List</h2>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task'
      />
      <button onClick={addTask}>Add</button>

      <ol>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ol>
    </div>
  )
}

export default Todolist
