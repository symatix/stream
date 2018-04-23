import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreams } from '../../actions';


import './App.css';

import Header from '../Header/Header'
import Container from '../Container/Container'

export class App extends Component {
	constructor(props){
		super(props);

		this.state = { view: 0 }

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeIndex = this.handleChangeIndex.bind(this);
	}

	componentWillMount(){
		this.props.getStreams();
	}

	handleChange = (event, value) => {
		this.setState({ view: value });
	};

	handleChangeIndex = view => {
		this.setState({ view });
	};


	render() {
	const { streams, activeStream, volume } = this.props.store;
		
		return (
			<div className="App">
				<Header 
					view={this.state.view}
					handleViewChange={this.handleChange}/>
				<Container 
					view={this.state.view}
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