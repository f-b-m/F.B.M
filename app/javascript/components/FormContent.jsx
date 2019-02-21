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
      title: "",
      content: "",
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickCreate = () => {
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

  handleClickEdit = () => {
    const { menuId } = this.props;
    console.log(this.props);
    console.log(menuId);
    axios({
      method: 'patch',
      url: '/menus/update',
      data: {
        title: this.state.title,
        content: this.state.content,
        id: menuId,
      }
    })
      .then((response) => {
        const { modalHandleClose } = this.props;
        console.log(response);
        alert('更新しました');
        modalHandleClose();
        location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  handleClickDelete = () => {
    const { menuId } = this.props;
    console.log(menuId)
    console.log(typeof menuId)
    axios.delete('menus/delete',
      {data : {
        id: menuId,
      }}
    )
      .then((response) => {
        const { modalHandleClose } = this.props;
        console.log(response);
        alert('削除しました');
        modalHandleClose();
        location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  render() {
    const { classes , action } = this.props;
    const { title, content } = this.state;
    const handleClickAction = `handleClick${action}`

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
        <Button onClick={this[handleClickAction]} color='primary'>
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
