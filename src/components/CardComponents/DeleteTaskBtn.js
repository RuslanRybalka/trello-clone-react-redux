import React from 'react'
import { deleteTask } from '../../actions';
import { connect } from 'react-redux';

class DeleteTaskBtn extends React.Component {
    handleDeleteTask = (e) => {
        e.preventDefault();
        this.props.deleteTask(this.props.id);
        console.log('delete task', this.props.id);
        return false;
    }
    render(){
        return (
            <button className="delete-btn" onClick={this.handleDeleteTask}>&times;</button>
        )
    }
    
}

const mpaDispatchToProps = {
    deleteTask: (id) => deleteTask(id)
}
export default connect(null, mpaDispatchToProps)(DeleteTaskBtn);

