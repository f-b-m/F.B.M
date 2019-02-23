import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ContainerMenus, ContainerTooltipsAddButton } from './ContainerMenus';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function FBMBody(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ContainerMenus />
      <ContainerTooltipsAddButton />
    </div>
  );
}

FBMBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FBMBody);
