import { createMuiTheme } from 'material-ui/styles';
import {
	grey300,
	orange,
	teal,
	white,
	darkBlack,
	fullBlack
} from 'material-ui/colors';
import { fade } from 'material-ui/styles/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const theme = createMuiTheme({
	spacing: spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
        type:'dark',
		primary: orange,
		secondary:white,
		accent:teal,
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade('#461308', 0.3),
		pickerHeaderColor: '#461308',
		clockCircleColor: fade('#461308', 0.07),
		shadowColor: fullBlack,
	},
	ripple: {
    color: 'green',
  },
});


export default theme;