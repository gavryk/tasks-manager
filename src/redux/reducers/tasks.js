const initState = {
  items: [],
};

const tasks = (state = initState, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_TASK":
        return {
            ...state,
            items: [...state.items, action.payload]
        }
    default:
      return state;
  }
};

export default tasks;
