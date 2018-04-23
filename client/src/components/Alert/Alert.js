import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const Alert = (props) => {
    const { open, message } = props;
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open}
                autoHideDuration={2000}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message}</span>}
            />
        </div>
    );
}

export default Alert;