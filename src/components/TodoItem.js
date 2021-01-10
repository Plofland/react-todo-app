import React from 'react';

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
      <div className="todoItem">
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
      </div>
    </>
  );
}

export default TodoItem;
