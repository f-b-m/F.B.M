import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

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
  constructor(props, context) {
    super(props, context);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickCreate() {
    axios.post('menus/create',
      {
        title: this.state.title,
        content: this.state.content,
      },
    )
      .then((response) => {
        const { modalHandleClose } = this.props;
        console.log(response);
        alert('作成しました');
        modalHandleClose();
        location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

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
        <Button onClick={this.handleClickCreate} name='menuCreate' color='primary'>
          {action}
        </Button>

      </div>
    );
  }
}

FormContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormContent);
