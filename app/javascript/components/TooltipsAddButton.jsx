import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
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
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
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

function TooltipsAddButton(props) {
  const { classes } = props;
  const { userId, menuId, isOpenCreateMenuModal } = props;
  const {
    addMenu, editMenu, deleteMenu, toggleCreateMenuModal,
  } = props;

  return (
    <div>
      <Tooltip title="Create" aria-label="Create">
        <Fab
          onClick={toggleCreateMenuModal}
          color="secondary"
          className={classes.absolute}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="menu-modal-title"
        aria-describedby="menu-modal-description"
        open={isOpenCreateMenuModal}
        onClose={toggleCreateMenuModal}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <FormContent
            action="Create"
            userId={userId}
            menuId={menuId}
            addMenu={addMenu}
            editMenu={editMenu}
            deleteMenu={deleteMenu}
            modalHandleClose={toggleCreateMenuModal}
          />
        </div>
      </Modal>
    </div>
  );
}

TooltipsAddButton.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  menuId: PropTypes.number.isRequired,
  isOpenCreateMenuModal: PropTypes.bool.isRequired,
  addMenu: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  toggleCreateMenuModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(TooltipsAddButton);
