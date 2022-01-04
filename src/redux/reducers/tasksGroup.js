const initState = {
  groups: [
    { id: 1, title: "Create", color: "#48e9a0", active: false }
  ],
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
    default:
      return state;
  }
};

export default tasksGroup;
