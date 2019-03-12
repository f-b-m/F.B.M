import { menuActionType } from '../actions';

const menus = (state = [], action) => {
  switch (action.type) {
    case menuActionType.getAll:
      return action.menus;

    case menuActionType.add:

      return [
        ...state,
        {
          id: action.menuId,
          title: action.title,
          content: action.content,
          user_id: action.userId,
        },
      ];

    case menuActionType.edit:
      return [...state.map(menu => (menu.id === action.menuId ? {
        id: action.menuId,
        title: action.title,
        content: action.content,
      }
        : menu))];

    case menuActionType.delete:
      return [...state.map(menu => (
        menu.id === action.menuId ? false : menu))].filter(Boolean);

    default:
      return state;
  }
};

export default menus;
