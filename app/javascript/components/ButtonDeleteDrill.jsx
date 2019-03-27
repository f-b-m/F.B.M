import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import FormDrillContent from './FormDrillContent';

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

function ButtonDeleteDrill(props) {
  const { classes } = props;
  const {
    userId, drillId, isOpenDeleteDrillModal, drillForm, title, content,
  } = props;
  const {
    addDrill, editDrill, deleteDrill, toggleDeleteDrillModal,
    changeTitle, changeContent, clearTitle, clearContent,
  } = props;

  const handleClick = () => {
    toggleDeleteDrillModal();
    changeTitle(title);
    changeContent(content);
  };

  const handleClose = () => {
    toggleDeleteDrillModal();
    clearTitle();
    clearContent();
  };


  return (
    <div>
      <Tooltip title="Delete" aria-label="Delete">
        <Fab
          onClick={handleClick}
          color="secondary"
        >
          <DeleteIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="delete-drill-modal-title"
        aria-describedby="delete-drill-modal-description"
        open={isOpenDeleteDrillModal}
        onClose={handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <FormDrillContent
            action="Delete"
            userId={userId}
            disabled
            drillId={drillId}
            drillForm={drillForm}
            addDrill={addDrill}
            editDrill={editDrill}
            deleteDrill={deleteDrill}
            changeTitle={changeTitle}
            changeContent={changeContent}
            clearTitle={clearTitle}
            clearContent={clearContent}
            modalHandleClose={handleClose}
            title={title}
            content={content}
          />
        </div>
      </Modal>
    </div>
  );
}

ButtonDeleteDrill.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  drillId: PropTypes.number.isRequired,
  drillForm: PropTypes.object.isRequired,
  isOpenDeleteDrillModal: PropTypes.bool.isRequired,
  addDrill: PropTypes.func.isRequired,
  editDrill: PropTypes.func.isRequired,
  deleteDrill: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  toggleDeleteDrillModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(ButtonDeleteDrill);
