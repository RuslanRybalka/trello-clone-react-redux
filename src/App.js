import React from 'react';
import Card from './components/Card';

import {Container, AddCardBtn} from './components';

import { connect } from 'react-redux';

class App extends React.Component {
  render(){
    return (
        <Container>
          {this.props.cards.map( card => <Card key={card.id} card={card}/>)}
          <AddCardBtn/>
        </Container> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}
export default connect(mapStateToProps)(App);