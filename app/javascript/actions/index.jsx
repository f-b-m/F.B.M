export const setUserId = userId => ({
  type: 'SET_USER_ID',
  userId,
});

export const deleteUserId = userId => ({
  type: 'DELETE_USER_ID',
  userId,
});

export const changeEmail = text => ({
  type: 'CHANGE_EMAIL',
  text,
});

export const changePassword = text => ({
  type: 'CHANGE_PASSWORD',
  text,
});

export const changePasswordConfirmation = text => ({
  type: 'CHANGE_PASSWORD_CONFIRMATION',
  text,
});

// TODO: this code may make vague state
export const toggleLogIn = () => ({
  type: 'TOGGLE_LOG_IN',
});

export const createMenu = (menuId, title, content) => ({
  type: 'CREATE_MENU',
  menuId,
  title,
  content,
});

export const editMenu = (menuId, title, content) => ({
  type: 'EDIT_MENU',
  menuId,
  title,
  content,
});

export const deleteMenu = menuId => ({
  type: 'DELETE_MENU',
  menuId,
});

export const toggleLogInModal = () => ({
  type: 'TOGGLE_LOG_IN_MODAL',
});

export const toggleSignUpModal = () => ({
  type: 'TOGGLE_SIGN_UP_MODAL',
});

export const toggleMenuModal = () => ({
  type: 'TOGGLE_MENU_MODAL',
});
