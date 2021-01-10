import React from 'react';
import todoData from 'todoData.js';

export default function TodoList(props) {
  const { todoData, handleChange } = props;

  const todoItems = todoData.map((item) => {
    return (
      <TodoItem key={todoData.id} item={item} handleChange={handleChange} />
    );
  });
  return <div></div>;
}
