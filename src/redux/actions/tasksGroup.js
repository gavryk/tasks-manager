import axios from "axios";
//"server": "npx json-server --watch db.json --port=3001"

export const fetchTasksGroups = () => {
  return async (dispatch) => {
    await axios.get(`/tasksGroups`).then(({ data }) => {
      dispatch(setTasksGroup(data));
    });
  };
};

export const postTaskGroup = (task) => {
  return async (dispatch) => {
    let { data } = await axios.post(`/tasksGroups`, task);
    dispatch(addTaskGroup(data));
  };
};

export const deleteTaskGroup = (id) => {
  return async (dispatch) => {
    axios.delete(`/tasksGroups/${id}`).then(() => {
      dispatch(removeTaskGroup(id));
    });
  };
};

export const setTasksGroup = (items) => {
  return {
    type: "SET_GROUP",
    payload: items,
  };
};

export const addTaskGroup = (task) => {
  return {
    type: "ADD_GROUP",
    payload: task,
  };
};

export const removeTaskGroup = (id) => {
  return {
    type: "REMOVE_GROUP",
    payload: id,
  };
};
