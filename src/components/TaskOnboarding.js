import React from 'react';
import styled from 'styled-components';

const StyledTaskOnboarding = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTaskInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function TaskOnboarding(props) {
  const { update } = props;

  const submit = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  return (
    <>
      <StyledTaskOnboarding>
        <StyledTaskInput>
          <input type="text" name="text" value="text"></input>
          <button onClick={submit}>Add Task</button>
        </StyledTaskInput>
        <StyledButtons>
          <button>Clear Completed Tasks</button>
          <button>Clear All Tasks</button>
        </StyledButtons>
      </StyledTaskOnboarding>
    </>
  );
}
