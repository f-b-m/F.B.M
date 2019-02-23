import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
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

function TooltipsEditButton(props) {
  const { classes } = props;
  const { userId, menuId, isOpenEditMenuModal } = props;
  const {
    addMenu, editMenu, deleteMenu, toggleEditMenuModal,
  } = props;

  return (
    <div>
      <Tooltip title="Edit" aria-label="Edit">
        <Fab
          onClick={toggleEditMenuModal}
          color="secondary"
          className={classes.absolute}
        >
          <EditIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="menu-modal-title"
        aria-describedby="menu-modal-description"
        open={isOpenEditMenuModal}
        onClose={toggleEditMenuModal}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <FormContent
            action="Edit"
            userId={userId}
            menuId={menuId}
            addMenu={addMenu}
            editMenu={editMenu}
            deleteMenu={deleteMenu}
            modalHandleClose={toggleEditMenuModal}
          />
        </div>
      </Modal>
    </div>
  );
}

TooltipsEditButton.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  menuId: PropTypes.number.isRequired,
  isOpenEditMenuModal: PropTypes.bool.isRequired,
  addMenu: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  toggleEditMenuModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(TooltipsEditButton);
