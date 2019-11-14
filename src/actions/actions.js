export const ADD_TASK = 'ADD_TASK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const MOVE_TASK = 'MOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export function addTask(task){
    return {
        type: ADD_TASK,
        task
    }
}
export function addCard(name){
    return{
        type: ADD_CARD,
        name
    }
}
export function deleteCard(id){
    return {
        type: DELETE_CARD,
        id
    }
}
export function deleteTask(id){
    return {
        type: DELETE_TASK,
        id
    }
}
export function completeTask(id){
    return {
        type: COMPLETE_TASK,
        id
    }
}
export function moveTask(task){
    return {
        type: MOVE_TASK,
        task
    }
}

export function editTask(id, task){
    return {
        type: EDIT_TASK,
        id,
        task
    }
}

