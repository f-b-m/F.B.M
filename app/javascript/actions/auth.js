import { authActionTypes } from '.';

export const setUserId = userId => ({
  type: authActionTypes.setUserId,
  userId,
});

export const deleteUserId = () => ({
  type: authActionTypes.deleteUserId,
});

export const changeEmail = text => ({
  type: authActionTypes.changeEmail,
  text,
});

export const changePassword = text => ({
  type: authActionTypes.changePassword,
  text,
});

export const changePasswordConfirmation = text => ({
  type: authActionTypes.changePasswordConfirmation,
  text,
});

// TODO: this code may make vague state
export const toggleLogIn = () => ({
  type: authActionTypes.toggleLogIn,
});
