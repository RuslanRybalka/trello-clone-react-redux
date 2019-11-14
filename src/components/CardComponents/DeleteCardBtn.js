import React from 'react'
import { connect } from 'react-redux';
import {deleteCard} from '../../actions';

class DeleteCardBtn extends React.Component{ 
    handleDeleteCard = (e) => {
        e.preventDefault();
        this.props.deleteCard(this.props.id);
        console.log('delete card');
        return false;
    }
    render(){
        return (
            <button className="delete-btn" onClick={this.handleDeleteCard}>&times;</button>
        )
    }    
}

const mapDispatchToProps = {
    deleteCard: (id) => deleteCard(id)
}
export default connect(null, mapDispatchToProps)(DeleteCardBtn)
