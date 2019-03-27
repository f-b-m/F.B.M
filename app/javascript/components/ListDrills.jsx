import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CardDrill from './CardDrill';
import {
  ContainerButtonEditDrill, ContainerButtonDeleteDrill,
} from './ContainerButtonDrill';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        <Grid container spacing={24}>
          {drills.map(elm => (
            <Grid item xs={12} key={elm.id}>
              <CardDrill drillTitle={elm.title} drillContent={elm.content} />
              <Paper className={classes.paper}>
                {`タイトル: ${elm.title}，内容: ${elm.content}`}
              </Paper>
              {elm.user_id === userId
                ? (
                  <div>
                    <ContainerButtonEditDrill
                      drillId={elm.id}
                      title={elm.title}
                      content={elm.content}
                    />
                    <ContainerButtonDeleteDrill
                      drillId={elm.id}
                      title={elm.title}
                      content={elm.content}
                    />
                  </div>
                )
                : <div />
              }

              <Button
                variant="outlined"
                className={classes.button}
                component="a"
                href="/drill_detail/"
              >
              Detail
              </Button>
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
