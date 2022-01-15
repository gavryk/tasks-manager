const initState = {
  groups: [],
  activeTasks: []
};

const tasksGroup = (state = initState, action) => {
  switch (action.type) {
    case "SET_GROUP":
      return {
        ...state,
        groups: action.payload,
      };
    case "ADD_GROUP":
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case "REMOVE_GROUP":
      return {
        ...state,
        groups: [
          ...state.groups.filter((group) => group.id !== action.payload),
        ],
      };
    case "SET_ACTIVE_TASKS":
      const activeTsk = state.groups.find(
        (group) => group.id === action.payload
      );
      return {
        ...state,
        activeTasks: activeTsk ? activeTsk : [],
      };
    case "DND_SORT_TASKS":
      let actTsk = state.groups.find(
        (group) => group.id === action.id
      );
      actTsk.tasks = action.payload;

      return {
        ...state,
        activeTasks: actTsk,
      };
    default:
      return state;
  }
};

export default tasksGroup;
