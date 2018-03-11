import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Header from '../Header/Header'
import Container from '../Container/Container'
import Player from '../Player/Player'

class App extends Component {
  render() {
  const { streams, activeStream, player } = this.props.store;
    
    return (
      <div className="App">
        <Header />
        <Container streams={streams} />
        <Player stream={activeStream} state={player} />
      </div>
    );
  }
}

function mapStateToProps(store){
  return { store }
}

export default connect(
  mapStateToProps
)(App);