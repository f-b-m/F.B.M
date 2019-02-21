import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

function FormLogin(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-email-input"
        label="Email"
        className={classes.textField}
        fullWidth
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
      />

      <TextField
        id="filled-password-input"
        label="Password"
        className={classes.textField}
        fullWidth
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
    </form>
  );
}

FormLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormLogin);
