import React from 'react';

const Todo = props => {

    return (
        <div 
          className={`item ${props.item.completed ? " completed" : ""}`}
          onClick={e => props.toggleTask(props.item.id)} >          
            {props.item.task}
        </div>
    )
}

export default Todo;