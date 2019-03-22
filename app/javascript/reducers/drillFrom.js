import { drillFormActionType } from '../actions';

const drillForm = (state = { title: '', content: '' }, action) => {
  switch (action.type) {
    case drillFormActionType.changeTitle:
      return Object.assign({}, state, {
        title: action.text,
      });

    case drillFormActionType.changeContent:
      return Object.assign({}, state, {
        content: action.text,
      });

    case drillFormActionType.clearTitle:
      return Object.assign({}, state, {
        title: '',
      });

    case drillFormActionType.clearContent:
      return Object.assign({}, state, {
        content: '',
      });

    default:
      return state;
  }
};

export default drillForm;
