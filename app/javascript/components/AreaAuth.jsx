import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
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
  toBeLogOut = () => {
    const { toggleLogIn, deleteUserId } = this.props;
    sessionApi.logout()
      .then((response) => {
        console.log(response);
        toggleLogIn();
        deleteUserId();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    const {
      userInfo, isLogIn, isOpenLogInModal, isOpenSignUpModal,
    } = this.props;
    const {
      setUserId, changeCredential,
      toggleLogIn, toggleLogInModal, toggleSignUpModal,
    } = this.props;

    const logOutButton = (
      <div>
        <Button onClick={this.toBeLogOut} color="inherit">
          Log Out
        </Button>
      </div>
    );

    const logInButton = (
      <div>
        <Button onClick={toggleSignUpModal} color="inherit">
          Sign Up
        </Button>
        <Modal
          aria-labelledby="signup-modal-title"
          aria-describedby="signup-modal-description"
          open={isOpenSignUpModal}
          onClose={toggleSignUpModal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormSignup
              modalHandleClose={toggleSignUpModal}
              toBeLogIn={toggleLogIn}
              userInfo={userInfo}
              changeCredential={changeCredential}
              setUserId={setUserId}
            />
          </div>
        </Modal>

        <Button onClick={toggleLogInModal} color="inherit">
          Log In
        </Button>
        <Modal
          aria-labelledby="login-modal-title"
          aria-describedby="login-modal-description"
          open={isOpenLogInModal}
          onClose={toggleLogInModal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormLogin
              modalHandleClose={toggleLogInModal}
              toBeLogIn={toggleLogIn}
              userInfo={userInfo}
              changeCredential={changeCredential}
              setUserId={setUserId}
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
  userInfo: PropTypes.object.isRequired,
  isLogIn: PropTypes.bool.isRequired,
  isOpenLogInModal: PropTypes.bool.isRequired,
  isOpenSignUpModal: PropTypes.bool.isRequired,
  setUserId: PropTypes.func.isRequired,
  deleteUserId: PropTypes.func.isRequired,
  changeCredential: PropTypes.object.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
  toggleLogInModal: PropTypes.func.isRequired,
  toggleSignUpModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(AreaAuth);
