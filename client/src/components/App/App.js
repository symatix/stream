import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreams } from '../../actions';


import './App.css';

import Header from '../Header/Header'
import Container from '../Container/Container'
import Player from '../Player/Player'

class App extends Component {

  componentWillMount(){
    this.props.getStreams();
  }

  render() {
  const { streams, activeStream, player, volume } = this.props.store;
    
    return (
      <div className="App">
        <Header />
        <Container streams={streams} activeStream={activeStream}/>
        <Player 
          streams={streams}
          stream={activeStream} 
          state={player} 
          volume={volume} />
      </div>
    );
  }
}

function mapStateToProps(store){
  return { store }
}

function mapDispatchToProps(dispatch) {
  return { 
      getStreams: bindActionCreators(getStreams, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);