import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CardDrill from './CardDrill';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 32,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class CenteredGrid extends React.Component {
  componentWillMount() {
    const { getAllDrills } = this.props;
    axios.get('drills/index')
      .then((response) => {
        const drills = response.data;
        getAllDrills(drills);
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  render() {
    const { classes } = this.props;
    const { userId, drills } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={32}>
          {drills.map(elm => (
            <Grid item xs={3} key={elm.id}>
              <CardDrill
                drillId={elm.id}
                drillTitle={elm.title}
                drillContent={elm.content}
                drillEditor={elm.user_id}
                userId={userId}
                t={0}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  drills: PropTypes.array.isRequired,
  getAllDrills: PropTypes.func.isRequired,
};

export default withStyles(styles)(CenteredGrid);
