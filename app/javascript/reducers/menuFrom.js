import { menuFormActionType } from '../actions';

const menuForm = (state = { title: '', content: '' }, action) => {
  switch (action.type) {
    case menuFormActionType.changeTitle:
      return Object.assign({}, state, {
        password: action.text,
      });

    case menuFormActionType.changeContent:
      return Object.assign({}, state, {
        password: action.text,
      });

    default:
      return state;
  }
};

export default menuForm;
