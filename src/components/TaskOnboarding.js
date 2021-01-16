import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTaskOnboarding = styled.div`
  display: flex;
  /* border: 2px solid black; */

  .addTask {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 1rem auto;
    /* border: 1px solid blue; */

    input {
      width: 70%;
    }

    #addTaskBtn {
      border-radius: 0 5px 5px 0;
    }
  }

  .clearTasks {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding: 1%;
    /* border: 1px solid red; */

    button {
      width: 80%;
    }

    #clearCompleteBtn {
      border-radius: 8px 8px 0px 0;
    }

    #clearAllBtn {
      border-radius: 0 0 8px 8px;
    }
  }
`;

export default function TaskOnboarding(props) {
  const { updateList } = props;

  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);

    // setTask({
    //   id: todoData.lenght,
    //   task: e.target.value,
    //   complete: false
    // });
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
          <button id="addTaskBtn" onClick={handleSubmit}>
            Add Task
          </button>
        </div>
        <div className="clearTasks">
          <button id="clearCompleteBtn">Clear Completed Tasks</button>
          <button id="clearAllBtn">Clear All Tasks</button>
        </div>
      </StyledTaskOnboarding>
    </>
  );
}
