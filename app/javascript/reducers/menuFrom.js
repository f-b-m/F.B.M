import { menuFormActionType } from '../actions';

const menuForm = (state = { title: '', content: '' }, action) => {
  switch (action.type) {
    case menuFormActionType.changeTitle:
      return Object.assign({}, state, {
        title: action.text,
      });

    case menuFormActionType.changeContent:
      return Object.assign({}, state, {
        content: action.text,
      });

    case menuFormActionType.clearTitle:
      return Object.assign({}, state, {
        content: '',
      });

    case menuFormActionType.clearContent:
      return Object.assign({}, state, {
        content: '',
      });

    default:
      return state;
  }
};

export default menuForm;
