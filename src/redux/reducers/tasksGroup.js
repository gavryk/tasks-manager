const initState = {
  groups: [],
  selectedGroup: null
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
        groups: [...state.groups.filter(group => group.id !== action.payload)]
      };
    case "SELECT_GROUP":
      return {
        ...state,
        selectedGroup: action.payload
      }  
    default:
      return state;
  }
};

export default tasksGroup;
