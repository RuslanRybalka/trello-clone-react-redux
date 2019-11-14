import React from 'react';
import {completeTask} from '../../actions';

import { connect } from 'react-redux';

class CompleteTaskBtn extends React.Component {
    handleCompleteTask = (e) => {
        e.preventDefault();
        this.props.completeTask(this.props.id);
        return false;
    }
    render(){
        return (
            <button className="complete-btn" onClick={this.handleCompleteTask}>&#10004;</button>
        )
    }    
}
const mapDispatchToProps = {
    completeTask: (id) => completeTask(id)
}
export default connect(null, mapDispatchToProps)(CompleteTaskBtn);
