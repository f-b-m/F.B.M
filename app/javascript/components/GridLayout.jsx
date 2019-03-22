import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CardMenuTitle from './CardMenuTitle';
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
    const {
      userId, isOpenEditMenuModal, isOpenDeleteMenuModal, menus, menuForm,
    } = this.props;
    const {
      addMenu, editMenu, deleteMenu,
      changeTitle, changeContent,
      clearTitle, clearContent,
      toggleEditMenuModal, toggleDeleteMenuModal,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {menus.map(elm => (
            <Grid item xs={12} key={elm.id}>
              <CardMenuTitle />
              <Paper className={classes.paper}>
                {`タイトル: ${elm.title}，内容: ${elm.content}`}
              </Paper>
              {elm.user_id === userId
                ? (
                  <div>
                    <ButtonEditDrill
                      menuId={elm.id}
                      userId={userId}
                      menuForm={menuForm}
                      isOpenEditMenuModal={isOpenEditMenuModal}
                      addMenu={addMenu}
                      editMenu={editMenu}
                      deleteMenu={deleteMenu}
                      changeTitle={changeTitle}
                      changeContent={changeContent}
                      clearTitle={clearTitle}
                      clearContent={clearContent}
                      toggleEditMenuModal={toggleEditMenuModal}
                      title={elm.title}
                      content={elm.content}
                    />
                    <ButtonDeleteDrill
                      menuId={elm.id}
                      userId={userId}
                      menuForm={menuForm}
                      isOpenDeleteMenuModal={isOpenDeleteMenuModal}
                      addMenu={addMenu}
                      editMenu={editMenu}
                      deleteMenu={deleteMenu}
                      changeTitle={changeTitle}
                      changeContent={changeContent}
                      clearTitle={clearTitle}
                      clearContent={clearContent}
                      toggleDeleteMenuModal={toggleDeleteMenuModal}
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
                href="/menu_detail/"
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
  menus: PropTypes.array.isRequired,
  menuForm: PropTypes.object.isRequired,
  isOpenEditMenuModal: PropTypes.bool.isRequired,
  isOpenDeleteMenuModal: PropTypes.bool.isRequired,
  getAllMenus: PropTypes.func.isRequired,
  addMenu: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  deleteMenu: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  clearContent: PropTypes.func.isRequired,
  toggleEditMenuModal: PropTypes.func.isRequired,
  toggleDeleteMenuModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(CenteredGrid);
