import React from 'react';
import styled from 'styled-components';

function TodoItem(props) {
  const { item, handleComplete } = props;

  const completedStyle = {
    color: '#778899',
    textDecoration: 'line-through'
  };

  return (
    <>
      <StyledTodoItem>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={handleComplete}
        />
        <p className="todoText" style={item.completed ? completedStyle : null}>
          {/* {props.item.completed ? <s>{props.item.text}</s> : props.item.text} this works for just a strike trough text but the completedStyle variable with inline styling can do multiple styling properties*/}
          {item.text}
        </p>
      </StyledTodoItem>
    </>
  );
}

export default TodoItem;

const StyledTodoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(17, 29, 29);
  width: 70%;
  margin: 4% 0;

  .todoText {
    /* border: 2px solid black; */
    /* margin: 1% auto; */
  }

  input[type='checkbox'] {
    margin-right: 5%;
  }
`;
