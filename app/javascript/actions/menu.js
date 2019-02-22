import { menuActionType } from '.';

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
