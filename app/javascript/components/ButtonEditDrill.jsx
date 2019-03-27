import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
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

function ButtonEditDrill(props) {
  const { classes } = props;
  const {
    userId, drillId, isOpenEditDrillModal, drillForm, title, content,
  } = props;
  const {
    addDrill, editDrill, deleteDrill, toggleEditDrillModal,
    changeTitle, changeContent, clearTitle, clearContent,
  } = props;

  const handleClick = () => {
    toggleEditDrillModal();
    changeTitle(title);
    changeContent(content);
  };

  const handleClose = () => {
    toggleEditDrillModal();
    clearTitle();
    clearContent();
  };

  return (
    <div>
      <Tooltip title="Edit" aria-label="Edit">
        <Fab
          onClick={handleClick}
          color="secondary"
          className={classes.absolute}
        >
          <EditIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="edit-drill-modal-title"
        aria-describedby="edit-drill-modal-description"
        open={isOpenEditDrillModal}
        onClose={handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <FormDrillContent
            action="Edit"
            disabled={false}
            userId={userId}
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

ButtonEditDrill.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  drillId: PropTypes.number.isRequired,
  drillForm: PropTypes.object.isRequired,
  isOpenEditDrillModal: PropTypes.bool.isRequired,
  addDrill: PropTypes.func.isRequired,
  editDrill: PropTypes.func.isRequired,
  deleteDrill: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  toggleEditDrillModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(ButtonEditDrill);
