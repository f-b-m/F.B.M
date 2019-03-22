export const authActionTypes = {
  setUserId: 'SET_USER_ID',
  deleteUserId: 'DELETE_USER_ID',
  changeEmail: 'CHANGE_EMAIL',
  changePassword: 'CHANGE_PASSWORD',
  changePasswordConfirmation: 'CHANGE_PASSWORD_CONFIRMATION',
  toggleLogIn: 'TOGGLE_LOG_IN',
};

export const authInitialObject = {
  userId: -1,
  email: '',
  password: '',
  passwordConfirmation: '',
  isLogIn: false,
};

export const drillActionType = {
  getAll: 'GET_ALL_MENU',
  add: 'ADD_MENU',
  edit: 'EDIT_MENU',
  delete: 'DELETE_MENU',
};

export const drillFormActionType = {
  changeTitle: 'CHANGE_TITLE',
  changeContent: 'CHANGE_CONTENT',
  clearTitle: 'CLEAR_TITLE',
  clearContent: 'CLEAR_CONTENT',
};

export const modalActionType = {
  toggleLogInModal: 'TOGGLE_LOG_IN_MODAL',
  toggleSignUpModal: 'TOGGLE_SIGN_UP_MODAL',
  toggleCreateDrillModal: 'TOGGLE_CREATE_MENU_MODAL',
  toggleEditDrillModal: 'TOGGLE_EDIT_MENU_MODAL',
  toggleDeleteDrillModal: 'TOGGLE_DELETE_MENU_MODAL',
};

export const modalInitialObject = {
  isOpenLogInModal: false,
  isOpenSignUpModal: false,
  isOpenCreateDrillModal: false,
  isOpenEditDrillModal: false,
  isOpenDeleteDrillModal: false,
};
