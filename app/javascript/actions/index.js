export const authActionTypes = {
  setUserId: 'SET_USER_ID',
  deleteUserId: 'DELETE_USER_ID',
  changeEmail: 'CHANGE_EMAIL',
  changePassword: 'CHANGE_PASSWORD',
  changePasswordConfirmation: 'CHANGE_PASSWORD_CONFIRMATION',
  toggleLogIn: 'TOGGLE_LOG_IN',
};

export const menuActionType = {
  add: 'ADD_MENU',
  edit: 'EDIT_MENU',
  delete: 'DELETE_MENU',
};

export const modalActionType = {
  toggleLogInModal: 'TOGGLE_LOG_IN_MODAL',
  toggleSignUpModal: 'TOGGLE_SIGN_UP_MODAL',
  toggleMenuModal: 'TOGGLE_MENU_MODAL',
};

export const modalInitialObject = {
  isOpenLogInModal: false,
  isOpenSignUpModal: false,
  isOpenMenuModal: false,
};
