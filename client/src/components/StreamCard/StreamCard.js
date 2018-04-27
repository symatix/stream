import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Card, { CardMedia } from 'material-ui/Card';

import StreamCardContent from './StreamCardContent';
import StreamCardAction from './StreamCardAction';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	card: {
		position: 'relative',
		width: 500,
		height: 500,
		transition: 'all .2s',
		'&:hover':{
			transform:'scale(1.05)'
		}
	},
	action: {
		display: 'flex',
		position: 'absolute',
		top: 100,
        left: 100,
	},
	active: {
		transform: 'scale(1.05)'
	},
	inActive: {
		transform: 'scale(.9)',
		opacity: '0.4'
	},
	media: {
		height: 0,
		paddingTop: '80%', // 16:9
	},
};

const StreamCard = (props) => {
	const { classes, name, info, id, activeId, metaData: { imgBig } } = props;
	const background = imgBig || "/images/player_desktop_background.jpg";
	
	return (
		<Grid className={classes.root} item lg={4} >
			<Card raised={true} className={
				activeId !== undefined 
				? activeId === id 
					? [classes.card, classes.active].join(' ')
					: [classes.card, classes.inActive].join(' ')
				: classes.card}>
				
				<StreamCardAction isActive={activeId === id ? true : false} className={classes.action} id={id} />
				
				<CardMedia
					className={classes.media}
					image={activeId === id ? background : "/images/player_desktop_background.jpg"}
					title="Player"/>

				<StreamCardContent
					name={name}
					info={info} />

			</Card>
		</Grid>
	);
}

StreamCard.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	activeId: PropTypes.number
};

function mapStateToProps({ metaData }){
	return { metaData }
}

export default connect(mapStateToProps)(withStyles(styles)(StreamCard));