import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTaskOnboarding = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  border: 2px solid black;

  .addTask {
    flex-direction: row;
    border: 1px solid blue;
  }

  .clearTasks {
    flex-direction: row;
    border: 1px solid red;
  }
`;

export default function TaskOnboarding(props) {
  const { updateList } = props;

  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(task);
  };

  return (
    <>
      <StyledTaskOnboarding>
        <div className="addTask">
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Add Task</button>
        </div>
        <div className="clearTasks">
          <button>Clear Completed Tasks</button>
          <button>Clear All Tasks</button>
        </div>
      </StyledTaskOnboarding>
    </>
  );
}
