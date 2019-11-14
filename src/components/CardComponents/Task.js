import React from 'react';
import DeleteTaskBtn from './DeleteTaskBtn';
import CompleteTaskBtn from './CompleteTaskBtn';

export default class Task extends React.Component {
    handleDragStart = (e) => {
        e.dataTransfer.setData('text', JSON.stringify(this.props.task));
        console.log(this.props.task);
        return false;
    }

    render(){
        return (
            <li className = {this.props.task.completed ? "tasks__item shadow completed" : "tasks__item shadow"} draggable="true" onDragStart={this.handleDragStart}>
                {this.props.task.name}
                <DeleteTaskBtn id={this.props.task.id}/>
                <CompleteTaskBtn id={this.props.task.id}/>
            </li>
        )
    }    
}