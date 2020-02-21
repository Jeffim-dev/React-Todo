import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      newTask: ''
    }
  }

  handleChange = e => {
    this.setState({newTask: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.newTask) {
      alert("Add Your Todo")
    } else {
    this.props.addTask(this.state.newTask);
    this.setState({
      newTask: ''
    })}
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="task"
          value={this.state.newTask}
          placeholder="...todo"
          onChange={this.handleChange}
          />
        <button>Add List</button>
      </form>
    )
  }
}

  export default TodoForm;