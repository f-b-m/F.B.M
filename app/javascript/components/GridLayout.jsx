import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import TooltipsEditButton from './TooltipsEditButton';
import TooltipsDeleteButton from './TooltipsDeleteButton';

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
  componentWillMount() {
    const { getAllMenus } = this.props;
    axios.get('menus/index')
      .then((response) => {
        const menus = response.data;
        getAllMenus(menus);
      });
    // .then((error) => {
    //   console.log(error);
    // })
  }

  render() {
    const { classes } = this.props;
    const { userId, isOpenMenuModal, menus } = this.props;
    const {
      addMenu, editMenu, deleteMenu, toggleMenuModal,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {menus.map(elm => (
            <Grid item xs={12} key={elm.id}>
              <Paper className={classes.paper}>
                {`タイトル: ${elm.title}，内容: ${elm.content}`}
              </Paper>
              <TooltipsEditButton
                menuId={elm.id}
                userId={userId}
                addMenu={addMenu}
                editMenu={editMenu}
                deleteMenu={deleteMenu}
                isOpenMenuModal={isOpenMenuModal}
                modalHandleClose={toggleMenuModal}
              />
              <TooltipsDeleteButton
                menuId={elm.id}
                addMenu={addMenu}
                editMenu={editMenu}
                deleteMenu={deleteMenu}
                isOpenMenuModal={isOpenMenuModal}
                modalHandleClose={toggleMenuModal}
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
  menus: PropTypes.array.isRequired,
  isOpenMenuModal: PropTypes.bool.isRequired,
  getAllMenus: PropTypes.func.isRequired,
  addMenu: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  toggleMenuModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(CenteredGrid);
