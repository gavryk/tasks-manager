import axios from "axios";

export const fetchTasks = () => {
  return async (dispatch) => {
    await axios.get(`/tasks`).then(({ data }) => {
      dispatch(setTasks(data));
    });
  };
};

export const setTasks = (items) => {
  return {
    type: "SET_TASKS",
    payload: items,
  };
};
