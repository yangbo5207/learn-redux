import { createStore } from 'redux';
import { addTodo } from './actions';
import todoApp from './reducers';

let store = createStore(todoApp);

store.dispatch(addTodo('添加的第一条任务'));
store.dispatch(addTodo('不要问我在哪里'));

console.log(store.getState());
