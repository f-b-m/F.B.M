import { modalActionType } from '.';

export const toggleLogInModal = () => ({
  type: modalActionType.toggleLogInModal,
});

export const toggleSignUpModal = () => ({
  type: modalActionType.toggleSignUpModal,
});

export const toggleCreateMenuModal = () => ({
  type: modalActionType.toggleCreateMenuModal,
});

export const toggleEditMenuModal = () => ({
  type: modalActionType.toggleEditMenuModal,
});

export const toggleDeleteMenuModal = () => ({
  type: modalActionType.toggleDeleteMenuModal,
});
