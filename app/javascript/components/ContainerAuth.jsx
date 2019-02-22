import { connect } from 'react-redux';
import AreaAuth from './AreaAuth';
import { toggleLogInModal, toggleSignUpModal } from '../actions/modal';
import {
  setUserId, deleteUserId, changeEmail, changePassword,
  changePasswordConfirmation, toggleLogIn,
} from '../actions/auth';

const mapStateToProps = state => ({
  userInfo: {
    userId: state.auths.userId,
    email: state.auths.email,
    password: state.auths.password,
    passwordConfirmation: state.auths.passwordConfirmation,
  },
  isLogIn: state.auths.isLogIn,
  isOpenLogInModal: state.modals.isOpenLogInModal,
  isOpenSignUpModal: state.modals.isOpenSignUpModal,
});

const mapDispatchToProps = dispatch => ({
  setUserId: userId => dispatch(setUserId(userId)),
  deleteUserId: () => dispatch(deleteUserId()),
  changeCredential: {
    changeEmail: text => dispatch(changeEmail(text)),
    changePassword: text => dispatch(changePassword(text)),
    changePasswordConf: text => dispatch(changePasswordConfirmation(text)),
  },
  toggleLogIn: text => dispatch(toggleLogIn(text)),
  toggleLogInModal: () => dispatch(toggleLogInModal()),
  toggleSignUpModal: () => dispatch(toggleSignUpModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AreaAuth);
