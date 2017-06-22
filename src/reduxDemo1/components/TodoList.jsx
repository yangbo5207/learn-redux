import React from 'react';
import Todo from './Todo';

const Todolist = props => {
    const { todos, onTodoClick } = props;
    console.log(props);
    return (
        <ul>
            {todos.map((todo, i) => <Todo key={i} {...todo} onClick={() => onTodoClick(i)} />)}
        </ul>
    )
}

export default Todolist;
