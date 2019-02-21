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

class FormContent extends React.Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes , action} = this.props;
    const { title, content } = this.state;

    return (
      <div>
        {`メニューを${action}します`}
        <form>
          <TextField
            id="filled-title"
            label="title"
            className={classes.textField}
            onChange={this.handleChange('title')}
            fullWidth
            value={title}
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-password-input"
            label="content"
            className={classes.textField}
            onChange={this.handleChange('content')}
            fullWidth
            multiline
            value={content}
            margin="normal"
            variant="filled"
          />
        </form>
      </div>
    );
  }
}

FormContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormContent);
