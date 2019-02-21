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

class AreaAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenLogin: false,
      isLogIn: false,
      isOpenSignup: false,
    };
  }

  handleOpenLogin = () => {
    this.setState({ isOpenLogin: true });
  };

  handleCloseLogin = () => {
    this.setState({ isOpenLogin: false });
  };

  handleOpenSignup = () => {
    this.setState({ isOpenSignup: true });
  };

  handleCloseSignup = () => {
    this.setState({ isOpenSignup: false });
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
    const { isOpenLogin, isOpenSignup, isLogIn } = this.state;

    const logOutButton = (
      <div>
        <Button onClick={this.toBeLogOut} color="inherit">
          Log Out
        </Button>
      </div>
    );

    const logInButton = (
      <div>
        <Button onClick={this.handleOpenSignup} color="inherit">
          Sign Up
        </Button>
        <Modal
          aria-labelledby="signup-modal-title"
          aria-describedby="signup-modal-description"
          open={isOpenSignup}
          onClose={this.handleCloseSignup}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormLogin
              modalHandleClose={this.handleCloseSignup}
              toBeLogIn={this.toBeLogIn}
              isSignUp
            />
          </div>
        </Modal>

        <Button onClick={this.handleOpenLogin} color="inherit">
          Log In
        </Button>
        <Modal
          aria-labelledby="login-modal-title"
          aria-describedby="login-modal-description"
          open={isOpenLogin}
          onClose={this.handleCloseLogin}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormLogin
              modalHandleClose={this.handleCloseLogin}
              toBeLogIn={this.toBeLogIn}
              isSignUp={false}
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

AreaAuth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaAuth);
