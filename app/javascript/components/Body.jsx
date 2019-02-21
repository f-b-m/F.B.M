import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { csrfToken } from 'rails-ujs';
import GridLayout from './GridLayout';
import ToolTipsAddButton from './TooltipsAddButton';

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

class FBMBody extends React.Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridLayout />
        <ToolTipsAddButton />
      </div>
    );
  }
}

FBMBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FBMBody);
