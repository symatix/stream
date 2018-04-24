import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaQuery from 'react-responsive';
import SwipeableViews from 'react-swipeable-views';
import IconButton from 'material-ui/IconButton';
import { setView } from '../../actions';

import Prev from '../../svg/prev.svg';
import Next from '../../svg/next.svg';


const styles = {
    navButton: {
        height: '100%',
        width: '100%'
    },
    navContainer: {
        position: 'absolute',
        width: '100vw',
        top: '40%'
    },
    left: {
        position: 'absolute',
        top: '40%',
        left: 20,
        zIndex: 100
    },
    right: {
        position: 'absolute',
        top: '40%',
        right: 20,
        zIndex: 100
    }
}

class ContainerTablet extends Component {
    state = { index: this.props.view }

    handleChangeIndex = dir => {
        let index = this.props.view;
        const tabs = this.props.children.length - 1;

        if (dir === 'next'){
            const nextIndex = index < tabs ? index + 1 : 0;
            return this.props.setView( nextIndex )
        }
        if (dir === 'prev'){
            const prevIndex = index > 0 ? index - 1 : tabs;
            return this.props.setView( prevIndex )
        }
    };

    render() {
        const { classes, children } = this.props;
        return (
            <MediaQuery query="(max-width: 1224px)">

                <IconButton
                    onClick={()=> this.handleChangeIndex('prev')}
                    className={classes.left}
                    color="inherit" 
                    aria-label="Previous Stream">
                    <img className={classes.navButton} src={Prev} alt='prev-stream' />
                </IconButton>
                <IconButton 
                    onClick={()=> this.handleChangeIndex('next')}
                    className={classes.right}
                    color="inherit" 
                    aria-label="Next Stream">
                    <img className={classes.navButton} src={Next} alt='next-stream' />
                </IconButton>

                <SwipeableViews
                    index={this.props.view}
                    onChangeIndex={this.handleChangeIndex}>
                    {children}
                </SwipeableViews>

            </MediaQuery>
        );
    }  
}


function mapDispatchToProps(dispatch){
    return { 
        setView: bindActionCreators(setView, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ContainerTablet));