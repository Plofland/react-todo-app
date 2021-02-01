import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { createGlobalStyle } from 'styled-components';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [completed, setCompleted] = useState(false);

  const updateList = (newTask) => {
    const task = {
      id: todoData.length,
      text: newTask,
      complete: false
    };
    const newList = [...todoData, task];
    setTodoData(newList);
  };

  const handleComplete = (id) => {
    setCompleted(() => {
      if (todoData.id === id) {
        return !todoData.completed;
      }
      return todoData;
    });
  };

  return (
    <div>
      <TodoApp />
      <h1>UNDER CONSTRUCTION: Rebuilding the app to make it even better!</h1>
      <TodoForm
        todoData={todoData}
        updateList={updateList}
        // setTodoData={setTodoData}
      />
      <TodoList todoData={todoData} handleComplete={handleComplete} />
    </div>
  );
}

const TodoApp = createGlobalStyle`
  font-family: 'Source Code Pro', monospace;
  background-color: darkslategray;
  color: whitesmoke;
`;

// //!where is inputName and inputValue coming from? TaskOnboarding line37
// const updateList = (inputName, inputValue) => {
//   setTodoData({
//     ...todoData,
//     [inputName]: inputValue
//   });
// };

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todoData
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     this.setState((prevState) => {
//       const updatedTodos = prevState.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       return {
//         todos: updatedTodos
//       };
//     });
//   }

//   render() {
//     const todoItems = this.state.todos.map((item) => (
//       <TodoItem
//         key={todoData.id}
//         item={item}
//         handleChange={this.handleChange}
//       />
//     ));
//     // what is the difference between this line of code and this next one?
//     // const todoItems = todoData.map(function(item){
//     //     <TodoItem key={item.id} item={item}/>
//     // })

//     return
//     <div>
//       <div className="todoList">{todoItems}</div>;
//       <TaskOnboarding/>
//     </div>
//   }
// }

// export default App;
