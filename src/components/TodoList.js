import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

export default function TodoList(props) {
  const { todoData, handleToggle } = props;

  return (
    <StyledItemList>
      {todoData &&
        todoData.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              handleToggle={handleToggle}
            />
          );
        })}
    </StyledItemList>
  );
}

const StyledItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  background-color: rgb(32, 53, 53);
  align-items: center;
  padding: 3%;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(200, 200, 200, 0.15),
    0 10px 0 -5px rgb(32, 53, 53),
    0 10px 1px -4px rgba(200, 200, 200, 0.15),
    0 20px 0 -10px rgba(32, 53, 53),
    0 20px 1px -9px rgba(200, 200, 200, 0.15);
`;
