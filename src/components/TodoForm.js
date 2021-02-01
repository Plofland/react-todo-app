import React, { useState } from 'react';
import styled from 'styled-components';

export default function TodoForm(props) {
  const { updateList } = props;

  const [state, setState] = useState({ inputText: '' });

  const handleChange = (e) => {
    setState({
      inputText: e.target.value
    });
    // console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(state.inputText);
    setState({
      inputText: ''
    });
  };

  return (
    <>
      <StyledTaskOnboarding>
        <div className="addTask">
          <input
            type="text"
            name="task"
            value={state.inputText}
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

const StyledTaskOnboarding = styled.div`
  display: flex;
  /* border: 2px solid black; */

  .addTask {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 1rem auto;
    /* cursor: pointer; */
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
      cursor: pointer;
    }

    #clearCompleteBtn {
      border-radius: 8px 8px 0px 0;
    }

    #clearAllBtn {
      border-radius: 0 0 8px 8px;
    }
  }
`;
