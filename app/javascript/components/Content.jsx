import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ContainerDrills from './ContainerDrills';
import ButtonCreateDrill from './ButtonCreateDrill';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  drillButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function FBMBody(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ContainerDrills />
      <ButtonCreateDrill />
    </div>
  );
}

FBMBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FBMBody);
