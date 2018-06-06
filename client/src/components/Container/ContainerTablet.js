import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaQuery from 'react-responsive';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Meta from '../Meta/Meta';
import Controls from '../Controls/Controls';
import { setView } from '../../actions';

import Prev from '../../svg/prev.svg';
import Next from '../../svg/next.svg';


const styles = {
    controls: {
        marginTop:30,
        textAlign:'center'
    },
    meta: {
        textAlign: 'center',
    },
    navButton: {
        height: '100%',
        width: '100%'
    },
    left: {
        position: 'absolute',
        top: '40%',
        left: 30,
        zIndex: 100
    },
    right: {
        position: 'absolute',
        top: '40%',
        right: 30,
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
        const { classes, children, active, activeId } = this.props;
        return (
            <MediaQuery query="(min-width: 768px)">
            <MediaQuery query="(max-width: 1224px)">

                <Grid container justify='center' spacing={16}>
                    <Grid item className={classes.meta}>
                        <Meta />
                    </Grid>
                </Grid>

                <Grid container justify='center' spacing={16}>
                    <IconButton
                        onClick={()=> this.handleChangeIndex('prev')}
                        className={classes.left}
                        color="secondary" 
                        aria-label="Previous Stream">
                        <img className={classes.navButton} src={Prev} alt='prev-stream' />
                    </IconButton>
                    <IconButton 
                        onClick={()=> this.handleChangeIndex('next')}
                        className={classes.right}
                        color="primary" 
                        aria-label="Next Stream">
                        <img className={classes.navButton} src={Next} alt='next-stream' />
                    </IconButton>

                    <SwipeableViews
                        index={this.props.view}
                        onChangeIndex={this.handleChangeIndex}>
                        {children}
                    </SwipeableViews>
                </Grid>


            <Grid className={classes.controls} container spacing={16}>
                <Controls active={active} id={activeId}/>
            </Grid>
            

            </MediaQuery>
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