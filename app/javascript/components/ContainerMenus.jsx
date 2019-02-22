import { connect } from 'react-redux';
import GridLayout from './GridLayout';
import ToolTipsAddButton from './TooltipsAddButton';
import { toggleMenuModal } from '../actions/modal';
import {
  getAllMenus, addMenu, editMenu, deleteMenu,
} from '../actions/menu';

const mapStateToProps = state => ({
  userId: state.auths.userId,
  menus: state.menes,
  isOpenMenuModal: state.isOpenMenuModal,
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
  toggleMenuModal: () => dispatch(toggleMenuModal()),
});

export const ContainerMenus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridLayout);

export const ContainerTooltipsAddButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolTipsAddButton);
