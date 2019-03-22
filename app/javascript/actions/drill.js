import { drillActionType } from '.';

export const getAllDrills = drills => ({
  type: drillActionType.getAll,
  drills,
});

export const addDrill = (drillId, title, content, userId) => ({
  type: drillActionType.add,
  drillId,
  title,
  content,
  userId,
});

export const editDrill = (drillId, title, content) => ({
  type: drillActionType.edit,
  drillId,
  title,
  content,
});

export const deleteDrill = drillId => ({
  type: drillActionType.delete,
  drillId,
});
