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
        items: [...state.items, action.payload],
      };
    case "REMOVE_TASK":
      const newItems = [...state.items.filter((item) => item.id !== action.payload)]
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};

export default tasks;
