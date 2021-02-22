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
        {/* <input type="checkbox" /> */}
        <p
          className={
            item.complete ? 'doneText' : 'todoText'
          }
        >
          ◾ {item.text}
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
  cursor: pointer;

  p {
    word-wrap: break-word;
  }

  .doneText {
    color: #778899;
    text-decoration: line-through;
  }

  @media (max-width: 800px) {
    padding: 1%;
    .todoText {
      font-size: 1.2rem;
    }
    .doneText {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 801px) {
    .todoText {
      font-size: 1.2rem;
    }
    .doneText {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1200px) {
    .todoText {
      font-size: 1.4rem;
    }
    .doneText {
      font-size: 1.4rem;
    }
  }
`;
