import { modalActionType, modalInitialObject } from '../actions';

const modals = (state = modalInitialObject, action) => {
  switch (action.type) {
    case modalActionType.toggleLogInModal:
      return Object.assign({}, state, {
        isOpenLogInModal: !state.isOpenLogInModal,
      });

    case modalActionType.toggleSignUpModal:
      return Object.assign({}, state, {
        isOpenSignUpModal: !state.isOpenSignUpModal,
      });

    case modalActionType.toggleCreateDrillModal:
      return Object.assign({}, state, {
        isOpenCreateDrillModal: !state.isOpenCreateDrillModal,
      });

    case modalActionType.toggleEditDrillModal:
      return Object.assign({}, state, {
        isOpenEditDrillModal: !state.isOpenEditDrillModal,
      });

    case modalActionType.toggleDeleteDrillModal:
      return Object.assign({}, state, {
        isOpenDeleteDrillModal: !state.isOpenDeleteDrillModal,
      });

    default:
      return state;
  }
};

export default modals;
