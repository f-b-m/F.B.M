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

class TooltipsEditButton extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, menuId } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Tooltip title="Edit" aria-label="Edit">
          <Fab
            onClick={this.handleOpen}
            color="secondary"
            className={classes.absolute}
          >
            <EditIcon />
          </Fab>
        </Tooltip>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormContent action="Edit" disabled={false} menuId={menuId} modalHandleClose={this.handleClose} />
          </div>
        </Modal>
      </div>
    );
  }
}

TooltipsEditButton.propTypes = {
  classes: PropTypes.object.isRequired,
  menuId: PropTypes.number.isRequired,
};

export default withStyles(styles)(TooltipsEditButton);
