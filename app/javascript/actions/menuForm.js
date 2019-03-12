import { menuFormActionType } from '.';

export const changeTitle = text => ({
  type: menuFormActionType.changeTitle,
  text,
});

export const changeContent = text => ({
  type: menuFormActionType.changeContent,
  text,
});

export const clearTitle = () => ({
  type: menuFormActionType.clearTitle,
});

export const clearContent = () => ({
  type: menuFormActionType.clearContent,
});
