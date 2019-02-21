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
    this.state = {
      title: '',
      content: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickCreate = () => {
    const { title, content } = this.state;
    axios.post('menus/create',
      {
        title,
        content,
      })
      .then(() => {
        const { modalHandleClose } = this.props;
        modalHandleClose();
        // location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  handleClickEdit = () => {
    const { menuId } = this.props;
    const { title, content } = this.state;
    axios({
      method: 'patch',
      url: '/menus/update',
      data: {
        title,
        content,
        id: menuId,
      },
    })
      .then(() => {
        const { modalHandleClose } = this.props;
        modalHandleClose();
        // location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  handleClickDelete = () => {
    const { menuId } = this.props;
    axios.delete('menus/delete',
      {
        data: {
          id: menuId,
        },
      })
      .then(() => {
        const { modalHandleClose } = this.props;
        modalHandleClose();
        // location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  render() {
    const { classes, action } = this.props;
    const { title, content } = this.state;
    const handleClickAction = `handleClick${action}`;

    return (
      <div>
        {`${action} Menu`}
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
        <Button onClick={this[handleClickAction]} color="primary">
          {action}
        </Button>
      </div>
    );
  }
}

FormContent.propTypes = {
  classes: PropTypes.object.isRequired,
  menuId: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
  modalHandleClose: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormContent);
