import React from 'react';
import styled from 'styled-components';


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

function TodoItem(props) {
  //   const { item, handleChange } = props;
  const completedStyle = {
    color: '#778899',
    textDecoration: 'line-through'
  };

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  return (
    <>
      <StyledTodoItem>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <p
          className="todoText"
          style={props.item.completed ? completedStyle : null}
        >
          {/* {props.item.completed ? <s>{props.item.text}</s> : props.item.text} this works for just a strike trough text but the completedStyle variable with inline styling can do multiple styling properties*/}
          {props.item.text}
        </p>
      </StyledTodoItem>
    </>
  );
}

export default TodoItem;
