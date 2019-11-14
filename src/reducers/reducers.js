import {ADD_TASK,  ADD_CARD, DELETE_CARD, DELETE_TASK, COMPLETE_TASK, EDIT_TASK} from '../actions';
import uuid from 'uuid';


// const initialState = {
//     tasks: [
//         {id: uuid(), name: 'Task 1', cardId: 1, completed: false},
//         {id: uuid(), name: 'Task 2', cardId: 1, completed: true}
//     ],
//     cards: [
//         {id: 1, name: 'First Card'},
//         {id: 2, name: 'SecondCard'}
//     ]
// };

const initialState = JSON.parse(window.localStorage.getItem('board')) || {cards: [], tasks: []};

export default function reducer(state = initialState, action){
    switch (action.type){
        case ADD_TASK : {
            return {cards: [...state.cards], tasks: [...state.tasks, action.task]};
        }
        case DELETE_TASK: {
            return {cards: [...state.cards], tasks: state.tasks.filter( task => task.id !== action.id)};
        }
        case ADD_CARD: {
            return {cards: [...state.cards, {id: uuid(), name: action.name}], tasks: state.tasks};
        }
        case DELETE_CARD: {
            return {cards: state.cards.filter(card => card.id !== action.id), tasks: state.tasks.filter(task => task.cardId !== action.id)};
        }
        case COMPLETE_TASK: {
            return {cards: state.cards, tasks: state.tasks.map(task => (task.id === action.id) ? {id: task.id, name: task.name, cardId: task.cardId, completed: !task.completed} : task)};
        }
        case EDIT_TASK: {
            return {cards: state.cards, tasks: state.tasks.map( task => (task.id !== action.id) ? task : action.task)}
        }
        default: return state;
    }
}
