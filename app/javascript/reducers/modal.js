import { modalActionType, modalInitialObject } from '../actions';

const menus = (state = modalInitialObject, action) => {
  switch (action.type) {
    case modalActionType.toggleLogIn:
      return Object.assign({}, state, {
        isOpenLogInModal: !state.isOpenLogInModal,
      });

    case modalActionType.toggleSignUpModal:
      return Object.assign({}, state, {
        isOpenSignUpModal: !state.isOpenSignUpModal,
      });

    case modalActionType.toggleMenuModal:
      return Object.assign({}, state, {
        isOpenMenuModal: !state.isOpenMenuModal,
      });

    default:
      return state;
  }
};

export default menus;
