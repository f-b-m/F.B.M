import { menuFormActionType } from '.';

export const changeTitle = text => ({
  type: menuFormActionType.changeTitle,
  text,
});

export const changeContent = text => ({
  type: menuFormActionType.changeContent,
  text,
});
