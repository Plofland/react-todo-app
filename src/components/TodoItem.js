import React from 'react';
import styled from 'styled-components';

function TodoItem(props) {
  const { item, handleToggle } = props;

  const handleClick = () => {
    handleToggle(item.id);
    console.log('ITEM ID', item.id);
  };
  
  return (
    <>
      <StyledTodoItem onClick={handleClick}>
        <p className={item.complete ? 'todoText' : null}>◾ {item.text}</p>
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
  cursor: pointer;

  .todoText {
    /* border: 2px solid black; */
    /* margin: 1% auto; */
    color: #778899;
    text-decoration: line-through;
  }

  input[type='checkbox'] {
    margin-right: 5%;
  }
`;
