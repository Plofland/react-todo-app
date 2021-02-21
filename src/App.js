import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { createGlobalStyle } from 'styled-components';

export default function App() {
  const [todoData, setTodoData] = useState([]);

  const updateList = (newTask) => {
    const task = {
      id: todoData.length,
      text: newTask,
      complete: false
    };
    const newList = [...todoData, task];
    setTodoData(newList);
  };

  const handleToggle = (itemId) => {
    console.log('TOGGLE', todoData);

    setTodoData(
      todoData.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    );
  };

  const handleComplete = () => {
    const newList = todoData.filter((item) => {
      return !item.complete;
    });

    setTodoData(newList);
  };

  const handleClearAll = () => {
    setTodoData([])
  }

  return (
    <div>
      <TodoApp />
      <h1>
        UNDER CONSTRUCTION: Rebuilding the app to make it
        even better!
      </h1>
      <TodoForm
        todoData={todoData}
        updateList={updateList}
        handleComplete={handleComplete}
        handleClearAll={handleClearAll}
      />
      <TodoList
        todoData={todoData}
        handleToggle={handleToggle}
      />
    </div>
  );
}

const TodoApp = createGlobalStyle`
  font-family: 'Source Code Pro', monospace;
  background-color: darkslategray;
  color: whitesmoke;
`;
