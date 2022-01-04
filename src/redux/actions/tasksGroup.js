export const setTasksGroup = (items) => {
  return {
    type: "SET_GROUP",
    payload: items,
  };
};

export const addTasksGroup = (task) => {
  return {
    type: "ADD_GROUP",
    payload: task,
  };
};