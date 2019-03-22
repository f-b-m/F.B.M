import { drillFormActionType } from '.';

export const changeTitle = text => ({
  type: drillFormActionType.changeTitle,
  text,
});

export const changeContent = text => ({
  type: drillFormActionType.changeContent,
  text,
});

export const clearTitle = () => ({
  type: drillFormActionType.clearTitle,
});

export const clearContent = () => ({
  type: drillFormActionType.clearContent,
});
