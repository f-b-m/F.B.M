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
  handleClickCreate = () => {
    const { menuForm } = this.props;
    const { title, content } = menuForm;
    axios.post('menus/create', {
      title,
      content,
    })
      .then((response) => {
        const { modalHandleClose } = this.props;
        const { addMenu } = this.props;
        const { userId } = this.props;
        const { menuId } = response.data.id;
        modalHandleClose();
        addMenu(menuId, title, content, userId);
        // location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  handleClickEdit = () => {
    const { menuForm, menuId } = this.props;
    const { title, content } = menuForm;
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
        const { editMenu } = this.props;
        modalHandleClose();
        editMenu(menuId, title, content);
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
        const { deleteMenu } = this.props;
        modalHandleClose();
        deleteMenu(menuId);
        // location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  render() {
    const {
      classes, action, disabled,
    } = this.props;
    const { menuForm } = this.props;
    const { changeTitle, changeContent } = this.props;
    const handleClickAction = `handleClick${action}`;

    return (
      <div>
        {`${action} Menu`}
        <form>
          <TextField
            id="filled-title"
            label="title"
            className={classes.textField}
            onChange={e => changeTitle(e.target.value)}
            fullWidth
            disabled={disabled}
            value={menuForm.title}
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-password-input"
            label="content"
            className={classes.textField}
            onChange={e => changeContent(e.target.value)}
            fullWidth
            disabled={disabled}
            multiline
            value={menuForm.content}
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
  action: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  menuId: PropTypes.number.isRequired,
  menuForm: PropTypes.object.isRequired,
  addMenu: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  modalHandleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormContent);
