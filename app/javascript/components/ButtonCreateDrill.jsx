import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import FormCreateDrill from './FormCreateDrill';

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

function ButtonCreateDrill(props) {
  const { classes } = props;
  const { userId, isOpenCreateDrillModal, drillForm } = props;
  const {
    addDrill, toggleCreateDrillModal,
    changeTitle, changeContent, clearTitle, clearContent,
  } = props;

  const handleClose = () => {
    toggleCreateDrillModal();
    clearTitle();
    clearContent();
  };

  return (
    <div>
      <Tooltip title="Create" aria-label="Create">
        <Fab
          onClick={toggleCreateDrillModal}
          color="secondary"
          className={classes.absolute}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="create-drill-modal-title"
        aria-describedby="create-drill-modal-description"
        open={isOpenCreateDrillModal}
        onClose={handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <FormCreateDrill
            action="Create"
            disabled={false}
            userId={userId}
            drillId={-1}
            drillForm={drillForm}
            addDrill={addDrill}
            changeTitle={changeTitle}
            changeContent={changeContent}
            clearTitle={clearTitle}
            clearContent={clearContent}
            modalHandleClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
}

ButtonCreateDrill.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  drillForm: PropTypes.object.isRequired,
  isOpenCreateDrillModal: PropTypes.bool.isRequired,
  addDrill: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  toggleCreateDrillModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(ButtonCreateDrill);
