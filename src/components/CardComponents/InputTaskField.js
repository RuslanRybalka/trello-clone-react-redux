import React from 'react';
import { addTask } from '../../actions';
import { connect } from 'react-redux';
import uuid from 'uuid';

class InputTaskField extends React.Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    handleAddTask = (e) => {
        e.preventDefault();
        if (this.input.current.value.trim() === '') {
            
            return false;
        }else {
            const task = {
                id: uuid(),
                cardId: this.props.cardId,
                name: this.input.current.value,
                completed: false
            }
            this.props.addTask(task);            
            this.input.current.value = '';
        }        
        return false;
    }
    render(){
        return (
            <form className="input-field shadow">
                <input ref={this.input} type="text" placeholder="Type new task..."className="add-task-field"/>
                <button className="btn btn-add-task" onClick={this.handleAddTask}>Add</button>
            </form>
        )
    }
}

const mapDispatchToState = {
    addTask: (task) => addTask(task)
}
export default connect(null, mapDispatchToState)(InputTaskField);
