import { drillActionType } from '../actions';

const drills = (state = [], action) => {
  switch (action.type) {
    case drillActionType.getAll:
      return action.drills;

    case drillActionType.add:

      return [
        ...state,
        {
          id: action.drillId,
          title: action.title,
          content: action.content,
          user_id: action.userId,
        },
      ];

    case drillActionType.edit:
      return [...state.map(drill => (drill.id === action.drillId ? {
        id: action.drillId,
        title: action.title,
        content: action.content,
      }
        : drill))];

    case drillActionType.delete:
      return [...state.map(drill => (
        drill.id === action.drillId ? false : drill))].filter(Boolean);

    default:
      return state;
  }
};

export default drills;
