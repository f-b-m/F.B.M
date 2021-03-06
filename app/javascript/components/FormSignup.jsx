import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { registrationApi } from '../modules/API';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class FormSinup extends React.Component {
  handleSubmit = () => (event) => {
    event.preventDefault();

    const { modalHandleClose, toBeLogIn } = this.props;
    const { userInfo } = this.props;
    const { email, password, passwordConfirmation } = userInfo;
    const { setUserId } = this.props;
    console.log(passwordConfirmation);

    registrationApi.signUp({ email, password, passwordConfirmation })
      .then((response) => {
        console.log(response);
        toBeLogIn();
        modalHandleClose();
        setUserId(1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { userInfo } = this.props;
    const { changeCredential } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          onChange={e => changeCredential.changeEmail(e.target.value)}
          fullWidth
          type="email"
          name="email"
          value={userInfo.email}
          autoComplete="email"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          onChange={e => changeCredential.changePassword(e.target.value)}
          fullWidth
          value={userInfo.password}
          type="password"
          autoComplete="new-password"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-password-confirmation-input"
          label="Password Confirmation"
          className={classes.textField}
          onChange={e => changeCredential.changePasswordConf(e.target.value)}
          fullWidth
          value={userInfo.passwordConfirmation}
          type="password"
          autoComplete="new-password"
          margin="normal"
          variant="filled"
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit()}
        >
          Sign Up
        </Button>
      </form>
    );
  }
}

FormSinup.propTypes = {
  classes: PropTypes.object.isRequired,
  modalHandleClose: PropTypes.func.isRequired,
  toBeLogIn: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  changeCredential: PropTypes.object.isRequired,
  setUserId: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormSinup);
