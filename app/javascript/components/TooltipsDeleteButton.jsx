import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import FormContent from './FormContent';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

function TooltipsDeleteButton(props) {
  const { classes } = props;
  const {
    userId, menuId, isOpenDeleteMenuModal, menuForm, title, content,
  } = props;
  const {
    addMenu, editMenu, deleteMenu, toggleDeleteMenuModal,
    changeTitle, changeContent,
  } = props;

  return (
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <Fab
          onClick={toggleDeleteMenuModal}
          color="secondary"
        >
          <DeleteIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="delete-menu-modal-title"
        aria-describedby="delete-menu-modal-description"
        open={isOpenDeleteMenuModal}
        onClose={toggleDeleteMenuModal}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <FormContent
            action="Delete"
            userId={userId}
            disabled
            menuId={menuId}
            menuForm={menuForm}
            addMenu={addMenu}
            editMenu={editMenu}
            deleteMenu={deleteMenu}
            changeTitle={changeTitle}
            changeContent={changeContent}
            modalHandleClose={toggleDeleteMenuModal}
            title={title}
            content={content}
          />
        </div>
      </Modal>
    </div>
  );
}

TooltipsDeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  menuId: PropTypes.number.isRequired,
  menuForm: PropTypes.object.isRequired,
  isOpenDeleteMenuModal: PropTypes.bool.isRequired,
  addMenu: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  toggleDeleteMenuModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(TooltipsDeleteButton);
