import React from 'react';
import styled from 'styled-components';

const StyledTaskOnboarding = styled.div``;

const StyledButtons = styled.div``;

export default function TaskOnboarding(props) {
  const { update } = props;

  const submit = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  return (
    <>
      <StyledTaskOnboarding>
        <div>
          <input type="text" name="text" value="text"></input>
          <button onClick={submit}>Add Task</button>
        </div>
        <StyledButtons>
          <button>Clear Completed Tasks</button>
          <button>Clear All Tasks</button>
        </StyledButtons>
      </StyledTaskOnboarding>
    </>
  );
}
