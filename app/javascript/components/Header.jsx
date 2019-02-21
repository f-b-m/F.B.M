import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AreaAuth from './AreaAuth';
import { setAxiosDefaults } from '../modules/API';

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

class FBMHeader extends React.Component {
  constructor(props) {
    super(props);
    setAxiosDefaults();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              FBMへようこそ
            </Typography>
            <AreaAuth />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

FBMHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FBMHeader);
