import React from 'react';
import {CardTitle, InputTaskField, TasksList, DeleteCardBtn} from './CardComponents';
import {connect} from 'react-redux';
import {editTask} from '../actions';

class Card extends React.Component {
    handleOnDragOver = (e) => {
        e.preventDefault();
        return false;
    }
    handleOnDrop =(e) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text'));
        let newData = {...data, cardId: this.props.id};
        this.props.editTask(data.id, newData);
        return false;
    }
    render(){
        return (
            <div className="card shadow" onDragOver={this.handleOnDragOver} onDrop={this.handleOnDrop}>
                <CardTitle name={this.props.name}/>
                <InputTaskField cardId={this.props.id}/>
                <TasksList cardId={this.props.id}/>
                <DeleteCardBtn id={this.props.id}/>
            </div>     
        )
    }    
}
const mapStateToProps = (state, ownProps) => {
    const {card} =  ownProps;
    return {
        id: card.id,
        name: card.name,
        tasks: state.tasks.filter( task => task.cardId === card.id)
    }
}
const mapsDispatchToProps = {
   editTask: (id, task) => editTask(id, task)
}
export default connect(mapStateToProps, mapsDispatchToProps)(Card);

