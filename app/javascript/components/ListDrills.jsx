import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CardDrillTitle from './CardDrillTitle';
import ButtonEditDrill from './ButtonEditDrill';
import ButtonDeleteDrill from './ButtonDeleteDrill';

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
    axios.get('menus/index')
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
    const {
      userId, isOpenEditDrillModal, isOpenDeleteDrillModal, drills, drillForm,
    } = this.props;
    const {
      addDrill, editDrill, deleteDrill,
      changeTitle, changeContent,
      clearTitle, clearContent,
      toggleEditDrillModal, toggleDeleteDrillModal,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {drills.map(elm => (
            <Grid item xs={12} key={elm.id}>
              <CardDrillTitle />
              <Paper className={classes.paper}>
                {`タイトル: ${elm.title}，内容: ${elm.content}`}
              </Paper>
              {elm.user_id === userId
                ? (
                  <div>
                    <ButtonEditDrill
                      drillId={elm.id}
                      userId={userId}
                      drillForm={drillForm}
                      isOpenEditDrillModal={isOpenEditDrillModal}
                      addDrill={addDrill}
                      editDrill={editDrill}
                      deleteDrill={deleteDrill}
                      changeTitle={changeTitle}
                      changeContent={changeContent}
                      clearTitle={clearTitle}
                      clearContent={clearContent}
                      toggleEditDrillModal={toggleEditDrillModal}
                      title={elm.title}
                      content={elm.content}
                    />
                    <ButtonDeleteDrill
                      drillId={elm.id}
                      userId={userId}
                      drillForm={drillForm}
                      isOpenDeleteDrillModal={isOpenDeleteDrillModal}
                      addDrill={addDrill}
                      editDrill={editDrill}
                      deleteDrill={deleteDrill}
                      changeTitle={changeTitle}
                      changeContent={changeContent}
                      clearTitle={clearTitle}
                      clearContent={clearContent}
                      toggleDeleteDrillModal={toggleDeleteDrillModal}
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
  drillForm: PropTypes.object.isRequired,
  isOpenEditDrillModal: PropTypes.bool.isRequired,
  isOpenDeleteDrillModal: PropTypes.bool.isRequired,
  getAllDrills: PropTypes.func.isRequired,
  addDrill: PropTypes.func.isRequired,
  editDrill: PropTypes.func.isRequired,
  deleteDrill: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  toggleEditDrillModal: PropTypes.func.isRequired,
  toggleDeleteDrillModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(CenteredGrid);
