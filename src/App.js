import React from 'react';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

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

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={todoData.id}
        item={item}
        handleChange={this.handleChange}
      />
    ));
    // what is the difference between this line of code and this next one?
    // const todoItems = todoData.map(function(item){
    //     <TodoItem key={item.id} item={item}/>
    // })

    return <div className="todoList">{todoItems}</div>;
  }
}

export default App;
