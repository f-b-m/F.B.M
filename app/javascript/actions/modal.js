import { modalActionType } from '.';

export const toggleLogInModal = () => ({
  type: modalActionType.toggleLogInModal,
});

export const toggleSignUpModal = () => ({
  type: modalActionType.toggleSignUpModal,
});

export const toggleCreateDrillModal = () => ({
  type: modalActionType.toggleCreateDrillModal,
});

export const toggleEditDrillModal = () => ({
  type: modalActionType.toggleEditDrillModal,
});

export const toggleDeleteDrillModal = () => ({
  type: modalActionType.toggleDeleteDrillModal,
});
