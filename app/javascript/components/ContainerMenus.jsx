import { connect } from 'react-redux';
import GridLayout from './GridLayout';
import ToolTipsAddButton from './TooltipsAddButton';
import {
  toggleCreateMenuModal, toggleEditMenuModal, toggleDeleteMenuModal,
} from '../actions/modal';
import {
  getAllMenus, addMenu, editMenu, deleteMenu,
} from '../actions/menu';

const mapStateToProps = state => ({
  userId: state.auths.userId,
  menus: state.menus,
  isOpenCreateMenuModal: state.modals.isOpenCreateMenuModal,
  isOpenEditMenuModal: state.modals.isOpenEditMenuModal,
  isOpenDeleteMenuModal: state.modals.isOpenDeleteMenuModal,
});

const mapDispatchToProps = dispatch => ({
  getAllMenus: menus => dispatch(getAllMenus(menus)),
  addMenu: (menuId, title, content) => {
    dispatch(addMenu(menuId, title, content));
  },
  editMenu: (menuId, title, content) => {
    dispatch(editMenu(menuId, title, content));
  },
  deleteMenu: menuId => dispatch(deleteMenu(menuId)),
  toggleCreateMenuModal: () => dispatch(toggleCreateMenuModal()),
  toggleEditMenuModal: () => dispatch(toggleEditMenuModal()),
  toggleDeleteMenuModal: () => dispatch(toggleDeleteMenuModal()),
});

export const ContainerMenus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridLayout);

export const ContainerTooltipsAddButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolTipsAddButton);
