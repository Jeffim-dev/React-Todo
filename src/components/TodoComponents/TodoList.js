import React from 'react';

import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todoData.map(item => {
                return <Todo item={item} key={item.id} toggleTask={props.toggleTask}/>
            })}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;