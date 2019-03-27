import { connect } from 'react-redux';
import ListDrills from './ListDrills';
import ButtonCreateDrill from './ButtonCreateDrill';
import { getAllDrills } from '../actions/drill';
import {
  toggleCreateDrillModal, toggleEditDrillModal, toggleDeleteDrillModal,
} from '../actions/modal';

const mapStateToProps = state => ({
  userId: state.auths.userId,
  drills: state.drills,
  isOpenCreateDrillModal: state.modals.isOpenCreateDrillModal,
  isOpenEditDrillModal: state.modals.isOpenEditDrillModal,
  isOpenDeleteDrillModal: state.modals.isOpenDeleteDrillModal,
});

const mapDispatchToProps = dispatch => ({
  getAllDrills: drills => dispatch(getAllDrills(drills)),
  toggleCreateDrillModal: () => dispatch(toggleCreateDrillModal()),
  toggleEditDrillModal: () => dispatch(toggleEditDrillModal()),
  toggleDeleteDrillModal: () => dispatch(toggleDeleteDrillModal()),
});

export const ContainerListDrills = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDrills);

export const ContainerButtonCreateDrill = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonCreateDrill);
