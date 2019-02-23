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

    case modalActionType.toggleCreateMenuModal:
      return Object.assign({}, state, {
        isOpenCreateMenuModal: !state.isOpenCreateMenuModal,
      });

    case modalActionType.toggleEditMenuModal:
      return Object.assign({}, state, {
        isOpenEditMenuModal: !state.isOpenEditMenuModal,
      });

    case modalActionType.toggleDeleteMenuModal:
      return Object.assign({}, state, {
        isOpenDeleteMenuModal: !state.isOpenDeleteMenuModal,
      });

    default:
      return state;
  }
};

export default modals;
