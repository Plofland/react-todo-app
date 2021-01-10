import React from 'react';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';
import todoList from './components/TodoList';
import TaskOnboarding from './components/TaskOnboarding';

export default function App() {
  return (
    <div>
      <h1>UNDER CONSTRUCTION: Rebuilding the app to make it even better!</h1>
      <TodoList />
      <TaskOnboarding />
    </div>
  );
}

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
