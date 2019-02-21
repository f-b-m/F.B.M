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

class FormLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => (event) => {
    event.preventDefault();

    const { modalHandleClose, toBeLogIn } = this.props;
    const { email, password, passwordConfirmation } = this.state;

    registrationApi.signUp({ email, password, passwordConfirmation })
      .then((response) => {
        console.log(response);
        toBeLogIn();
        modalHandleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { email, password, passwordConfirmation } = this.state;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          onChange={this.handleChange('email')}
          fullWidth
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          onChange={this.handleChange('password')}
          fullWidth
          value={password}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-password-input"
          label="Password Confirmation"
          className={classes.textField}
          onChange={this.handleChange('passwordConfirmation')}
          fullWidth
          value={passwordConfirmation}
          type="password"
          autoComplete="current-password"
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

FormLogin.propTypes = {
  classes: PropTypes.object.isRequired,
  modalHandleClose: PropTypes.func.isRequired,
  toBeLogIn: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormLogin);
