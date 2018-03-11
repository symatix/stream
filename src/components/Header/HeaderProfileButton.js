import React from 'react';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';


class HeaderProfileButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
        <div>
            <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit">
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}>
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
        </div>
    );
  }
}

export default HeaderProfileButton;