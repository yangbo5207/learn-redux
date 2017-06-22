import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Todolist from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: index => dispatch(toggleTodo(index))
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(Todolist);

export default VisibleTodoList;
