import { authActionTypes, authInitialObject } from '../actions';

const auths = (state = authInitialObject, action) => {
  switch (action.type) {
    case authActionTypes.setUserId:
      return Object.assign({}, state, {
        uerId: action.userId,
      });

    case authActionTypes.deleteUserId:
      return Object.assign({}, state, {
        uerId: '',
      });

    case authActionTypes.changeEmail:
      return Object.assign({}, state, {
        email: action.text,
      });

    case authActionTypes.changePassword:
      return Object.assign({}, state, {
        password: action.text,
      });

    case authActionTypes.changePasswordConfirmation:
      return Object.assign({}, state, {
        passwordConfirmation: action.passwordConfirmation,
      });

    case authActionTypes.toggleLogIn:
      return Object.assign({}, state, {
        isLogIn: !state.isLogIn,
      });

    default:
      return state;
  }
};

export default auths;
