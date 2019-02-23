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

    case menuActionType.edit:
      return [...state.map(menu => (menu.id === action.menuId ? {
        menuId: action.menuId,
        title: action.title,
        content: action.content,
      }
        : menu))];

    case menuActionType.delete:
      console.log(action.menuId);
      return [...state.map(menu => (
        menu.id === action.menuId ? false : menu))].filter(Boolean);

    default:
      return state;
  }
};

export default menus;
