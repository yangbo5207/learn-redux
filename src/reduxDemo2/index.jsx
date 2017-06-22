import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { switchtab } from './actions';
import Tab from './tab';

const store = createStore(reducer);

function reduxRender() {
    render(
        <Tab index={store.getState().index} clickHander={index => store.dispatch(switchtab(index))} />,
        document.querySelector('#root')
    );
}

store.subscribe(reduxRender);
store.dispatch(switchtab(0));
