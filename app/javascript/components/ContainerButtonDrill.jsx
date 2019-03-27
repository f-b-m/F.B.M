import { connect } from 'react-redux';
import ButtonCreateDrill from './ButtonCreateDrill';
import ButtonEditDrill from './ButtonEditDrill';
import ButtonDeleteDrill from './ButtonDeleteDrill';
import {
  toggleCreateDrillModal, toggleEditDrillModal, toggleDeleteDrillModal,
} from '../actions/modal';
import {
  addDrill, editDrill, deleteDrill,
} from '../actions/drill';
import {
  changeTitle, changeContent, clearTitle, clearContent,
} from '../actions/drillForm';

const mapStateToProps = state => ({
  userId: state.auths.userId,
  drills: state.drills,
  drillForm: state.drillForm,
  isOpenCreateDrillModal: state.modals.isOpenCreateDrillModal,
  isOpenEditDrillModal: state.modals.isOpenEditDrillModal,
  isOpenDeleteDrillModal: state.modals.isOpenDeleteDrillModal,
});

const mapDispatchToProps = dispatch => ({
  addDrill: (drillId, title, content, userId) => {
    dispatch(addDrill(drillId, title, content, userId));
  },
  editDrill: (drillId, title, content) => {
    dispatch(editDrill(drillId, title, content));
  },
  changeTitle: text => dispatch(changeTitle(text)),
  changeContent: text => dispatch(changeContent(text)),
  clearTitle: () => dispatch(clearTitle()),
  clearContent: () => dispatch(clearContent()),
  deleteDrill: drillId => dispatch(deleteDrill(drillId)),
  toggleCreateDrillModal: () => dispatch(toggleCreateDrillModal()),
  toggleEditDrillModal: () => dispatch(toggleEditDrillModal()),
  toggleDeleteDrillModal: () => dispatch(toggleDeleteDrillModal()),
});

export const ContainerButtonCreateDrill = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonCreateDrill);

export const ContainerButtonEditDrill = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonEditDrill);

export const ContainerButtonDeleteDrill = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonDeleteDrill);
