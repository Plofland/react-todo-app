import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { createGlobalStyle } from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

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
    setTodoData([]);
  };

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Hachi Maru Pop',
            weights: [400]
          }
        ]}
      />
      <TodoApp />
      <h1>ToDo App</h1>
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
    </>
  );
}

const TodoApp = createGlobalStyle`
  body {
    font-family: 'Source Code Pro', monospace;
    background-color: darkslategray;
    color: whitesmoke;
  }
  h1 {
    display:flex;
    justify-content: center;
    font-family: 'Hachi Maru Pop', cursive;
    padding: 3%;
  }
`;
