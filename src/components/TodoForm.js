import React, { useState } from 'react';

const TodoForm = ({addTask}) => {

  const [task, setTask] = useState("");

  const handleChanges = e => {
    setTask(e.target.value);
  }

  const submitItem = e => {
    e.preventDefault();
    addTask(task)
  }

    return (
      <form onSubmit={submitItem}>
        <input type="text" name="task" value={task} onChange={handleChanges} />
        <button>Add Task</button>
      </form>
    );
}

export default TodoForm;