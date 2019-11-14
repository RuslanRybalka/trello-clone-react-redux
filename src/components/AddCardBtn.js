import React from 'react'
import {connect} from 'react-redux';
import {addCard} from '../actions'

class AddCardBtn extends React.Component {
    constructor(props){
        super(props);
        this.cardNameInput = React.createRef();
    }
    handleAddCard = (e) => {
        e.preventDefault();
        const cardName = this.cardNameInput.current.value;
        if (cardName.trim() === '') {
            this.cardNameInput.current.value = '';
            return false;
        }
        else{
            this.props.addCard(cardName);
            this.cardNameInput.current.value = '';
        }
        return false;
    }
    
    render(){
        return (
            <form className="add-card-box shadow">
                <input placeholder="Enter card name" className="card-name__input shadow" ref={this.cardNameInput}/>
                <button onClick={this.handleAddCard} type="submit" className="add-card-btn shadow" >Add new card <span className="plus-sign">+</span></button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addCard: (name) => addCard(name)
};
export default connect(null, mapDispatchToProps)(AddCardBtn);
