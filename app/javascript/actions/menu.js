import { menuActionType } from '.';

export const getAllMenus = menus => ({
  type: menuActionType.getAll,
  menus,
});

export const addMenu = (menuId, title, content) => ({
  type: menuActionType.add,
  menuId,
  title,
  content,
});

export const editMenu = (menuId, title, content) => ({
  type: menuActionType.edit,
  menuId,
  title,
  content,
});

export const deleteMenu = menuId => ({
  type: menuActionType.delete,
  menuId,
});

export const changeTitle = text => ({
  type: menuActionType.changeTitle,
  text,
});

export const changeContent = text => ({
  type: menuActionType.changeContent,
  text,
});
