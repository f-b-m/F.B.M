import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import FormLogin from './FormLogin';
import { sessionApi } from '../modules/API';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class ButtonLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLogIn: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  toBeLogOut = () => {
    sessionApi.logout()
      .then((response) => {
        console.log(response);
        this.setState({ isLogIn: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toBeLogIn = () => {
    this.setState({ isLogIn: true });
  };

  render() {
    const { classes } = this.props;
    const { open, isLogIn } = this.state;

    const logOutButton = (
      <div>
        <Button onClick={this.toBeLogOut} color="inherit">
          ログアウト
        </Button>
      </div>
    );

    const logInButton = (
      <div>
        <Button onClick={this.handleOpen} color="inherit">
          ログイン
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormLogin
              modalHandleClose={this.handleClose}
              toBeLogIn={this.toBeLogIn}
            />
          </div>
        </Modal>
      </div>
    );

    return (
      <div>
        {isLogIn ? logOutButton : logInButton}
      </div>
    );
  }
}

ButtonLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonLogin);
