import React from 'react';
import styled from 'styled-components';

const StyledTaskOnboarding = styled.div``;

const StyledButtons = styled.div``;

export default function TaskOnboarding() {
  return (
    <>
      <StyledTaskOnboarding>
        <div>
          <input type="text"></input>
          <button>Add Task</button>
        </div>
        <StyledButtons>
          <button>Clear Completed Tasks</button>
          <button>Clear All Tasks</button>
        </StyledButtons>
      </StyledTaskOnboarding>
    </>
  );
}
