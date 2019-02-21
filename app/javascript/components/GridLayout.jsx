import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CenteredGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentWillMount() {
    axios.get('menus/index')
      .then((response) => {
        const menus = response.data;
        this.setState({
          menus,
        });
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  render() {
    const { classes } = this.props;
    const { menus } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {menus.map(elm =>
            (
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  タイトル: {elm.title}, 内容: {elm.content}
                 </Paper>
              </Grid>
            )
          )};
        </Grid>
      </div>
    );
  }

}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
