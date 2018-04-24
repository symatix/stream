import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreams } from '../../actions';


import './App.css';

import Header from '../Header/Header'
import Container from '../Container/Container'

export class App extends Component {
	componentWillMount(){
		this.props.getStreams();
	}


	render() {
	const { streams, activeStream, volume, streamView } = this.props.store;
		
		return (
			<div className="App">
				<Header />
				<Container 
					view={streamView}
					handleViewChange={this.handleChangeIndex}
					streams={streams} 
					activeStream={activeStream}
					volume={volume}/>
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