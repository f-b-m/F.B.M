import { menuActionType } from '.';

export const getAllMenus = menus => ({
  type: menuActionType.getAll,
  menus,
});

export const addMenu = (menuId, title, content, userId) => ({
  type: menuActionType.add,
  menuId,
  title,
  content,
  userId,
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
