import { menuFormType } from '../actions';

const menuForm = (state = { title: '', content: '' }, action) => {
  switch (action.type) {
    case menuFormType.changeTitle:
      return Object.assign({}, state, {
        password: action.text,
      });

    case menuFormType.changeContent:
      return Object.assign({}, state, {
        password: action.text,
      });

    default:
      return state;
  }
};

export default menuForm;
