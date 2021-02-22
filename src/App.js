import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const todoData = JSON.parse(
      localStorage.getItem('todoData')
    );
    if (todoData) {
      setTodoData(todoData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'todoData',
      JSON.stringify(todoData)
    );
  }, [todoData]);

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
      <TodoAppGlobal />
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

const TodoAppGlobal = createGlobalStyle`
  //*CSS RESET
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Source Code Pro', monospace;
    background-color: darkslategray;
    height: 100vh;
    color: whitesmoke;
  }
  h1 {
    display:flex;
    justify-content: center;
    font-family: 'Hachi Maru Pop', cursive;
    font-size: 3rem;
    font-weight: bold;
    padding: 3%;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: mediumslateblue;
    -webkit-animation: glow 6.5s ease-in-out infinite alternate;
    -moz-animation: glow 6.5s ease-in-out infinite alternate;
    animation: glow 6.5s ease-in-out infinite alternate;
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #FFF874, 0 0 40px #FFF874, 0 0 50px #FFF874, 0 0 60px #FFF874, 0 0 70px #FFF874, 0 0 80px #FFF874;
    }
  }
  ::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(rgba(88, 88, 170, 50%), rgba(110, 110, 175), rgba(88, 88, 170, 50%) );
  border-radius: 4px;
  transition: 1s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, rgb(255, 255, 255));
}
`;
