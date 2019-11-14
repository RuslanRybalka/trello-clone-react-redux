import {createStore} from 'redux';
//import {addTask, addCard, deleteCard, deleteTask, completeTask, moveTask} from './actions';
import reducer from '../reducers';


export const store = createStore(reducer);

store.subscribe(() => {
    window.localStorage.setItem('board', JSON.stringify(store.getState()));
});