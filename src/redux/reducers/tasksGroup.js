const initState = {
  groups: [
    { id: 1, title: "Create", color: "#48e9a0", active: false },
    { id: 2, title: "Read", color: "#f3b94c", active: false },
    { id: 3, title: "Update", color: "#da46df", active: false },
    { id: 4, title: "Delete", color: "#f54545", active: false },
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
