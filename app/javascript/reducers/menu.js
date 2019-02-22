import { menuActionType } from '../actions';

const menus = (state = [], action) => {
  switch (action.type) {
    case menuActionType.getAll:
      return action.menus;

    case menuActionType.add:
      return [
        ...state,
        {
          menuId: action.menuId,
          title: action.title,
          content: action.content,
        },
      ];

    // TODO: implement logic
    case menuActionType.edit:
      return state;

    // TODO: implement logic
    case menuActionType.delete:
      return state;

    default:
      return state;
  }
};

export default menus;
