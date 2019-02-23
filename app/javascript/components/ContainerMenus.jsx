import { connect } from 'react-redux';
import GridLayout from './GridLayout';
import ToolTipsAddButton from './TooltipsAddButton';
import {
  toggleCreateMenuModal, toggleEditMenuModal, toggleDeleteMenuModal,
} from '../actions/modal';
import {
  getAllMenus, addMenu, editMenu, deleteMenu,
} from '../actions/menu';
import { changeTitle, changeContent } from '../actions/menuForm';

const mapStateToProps = state => ({
  userId: state.auths.userId,
  menus: state.menus,
  menuForm: state.menuForm,
  isOpenCreateMenuModal: state.modals.isOpenCreateMenuModal,
  isOpenEditMenuModal: state.modals.isOpenEditMenuModal,
  isOpenDeleteMenuModal: state.modals.isOpenDeleteMenuModal,
});

const mapDispatchToProps = dispatch => ({
  getAllMenus: menus => dispatch(getAllMenus(menus)),
  addMenu: (menuId, title, content, userId) => {
    dispatch(addMenu(menuId, title, content, userId));
  },
  editMenu: (menuId, title, content) => {
    dispatch(editMenu(menuId, title, content));
  },
  changeTitle: text => dispatch(changeTitle(text)),
  changeContent: text => dispatch(changeContent(text)),
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
