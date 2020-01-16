import React from 'react';

import {todoData} from './components/TodoComponents/todoData'; 
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super()
    this.state = {
      todoData: todoData
    }
  }

  // addTask = newTaskText => {
  //   const newTask = {
  //     task: newTaskText,
  //     id: Date.now(),
  //     completed: false
  //   }
  //   this.setState({
  //     todoData: [...this.state.todoData, newTask]
  //   })
  // }

  addTask = newTaskText => {
    const newState = {
      ...this.state,
      todoData: [
        ...this.state.todoData,
        {  task: newTaskText, 
           id: Date.now(),
           completed: false }
      ]
    }
    this.setState(newState)
  }

  toggleTask = taskId => {
    this.setState({todoData: this.state.todoData.map(item => {
      if (item.id === taskId) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
      }
    )})
  } 

  clearCompleted = e => {
    e.preventDefault();
    this.setState({ 
      todoData: this.state.todoData.filter(task => {
        return !task.completed;
      })
    })
  } 

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          todoData={this.state.todoData}
          toggleTask={this.toggleTask} 
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
