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
  handleClickEdit = () => {
    const { drillForm, drillId } = this.props;
    const { title, content } = drillForm;
    axios({
      method: 'patch',
      url: '/drills/update',
      data: {
        title,
        content,
        id: drillId,
      },
    })
      .then(() => {
        const { modalHandleClose } = this.props;
        const { editDrill } = this.props;
        const { clearTitle, clearContent } = this.props;
        editDrill(drillId, title, content);
        clearTitle();
        clearContent();
        modalHandleClose();
        // location.reload();
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  handleClickDelete = () => {
    const { drillId } = this.props;
    axios.delete('drills/delete',
      {
        data: {
          id: drillId,
        },
      })
      .then(() => {
        const { modalHandleClose } = this.props;
        const { deleteDrill } = this.props;
        const { clearTitle, clearContent } = this.props;
        deleteDrill(drillId);
        clearTitle();
        clearContent();
        modalHandleClose();
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
    const { drillForm } = this.props;
    const { changeTitle, changeContent } = this.props;
    const handleClickAction = `handleClick${action}`;

    return (
      <div>
        {`${action} Drill`}
        <form>
          <TextField
            id="filled-title"
            label="title"
            className={classes.textField}
            onChange={e => changeTitle(e.target.value)}
            fullWidth
            disabled={disabled}
            value={drillForm.title}
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
            value={drillForm.content}
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
  drillId: PropTypes.number.isRequired,
  drillForm: PropTypes.object.isRequired,
  editDrill: PropTypes.func.isRequired,
  deleteDrill: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  modalHandleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormContent);
