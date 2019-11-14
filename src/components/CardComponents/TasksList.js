import React from 'react';
import Task  from './Task';
import { connect } from 'react-redux';

class TasksList extends React.Component{
    render(){
        return (
            <ul className="tasks__list">
                {this.props.tasks.map( task => <Task key={task.id} task={task}/> )}
            </ul>
        )
    }
    
}
const mapStateToProps = (state, ownProps) =>{
    const {cardId} = ownProps;
    return {
        tasks: state.tasks.filter( task => task.cardId === cardId)
    }
}

export default connect(mapStateToProps)(TasksList);
