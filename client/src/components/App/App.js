import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreams } from '../../actions';


import './App.css';

import Header from '../Header/Header'
import Container from '../Container/Container'

const style = {
	position: 'relative',
	width: '100vw',
	height: '100vh',
	backgroundImage: 'url("/images/yam_mob_pozadina.jpg")'
}

export class App extends Component {
	componentWillMount(){
		this.props.getStreams();
	}


	render() {
	const { streams, activeStream, volume, streamView, metaData } = this.props.store;
		
		return (
			<div className="App" style={window.innerWidth <= 768 ? style : {}}>
				<Header />
				<Container 
					meta={metaData}
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