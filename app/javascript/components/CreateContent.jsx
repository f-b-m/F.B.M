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

class CreateContent extends React.Component {
  handleClickCreate = () => {
    const { drillForm } = this.props;
    const { title, content } = drillForm;
    axios.post('drills/create', {
      title,
      content,
    })
      .then((response) => {
        const { modalHandleClose } = this.props;
        const { clearTitle, clearContent } = this.props;
        const { addDrill } = this.props;
        const { userId } = this.props;
        modalHandleClose();
        clearTitle();
        clearContent();
        addDrill(response.data.id, title, content, userId);
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

CreateContent.propTypes = {
  classes: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  drillForm: PropTypes.object.isRequired,
  addDrill: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  modalHandleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateContent);
