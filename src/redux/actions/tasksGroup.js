import axios from "axios";
//"server": "npx json-server --watch db.json --port=3001"

export const fetchTasksGroups = () => {
  return async (dispatch) => {
    await axios.get(`/groups?_embed=tasks`).then(({ data }) => {
      dispatch(setTasksGroup(data));
    });
  };
};

export const postTaskGroup = (task) => {
  return async (dispatch) => {
    let { data } = await axios.post(`/groups`, task);
    dispatch(addTaskGroup(data));
  };
};

export const deleteTaskGroup = (id) => {
  return async (dispatch) => {
    axios.delete(`/groups/${id}`).then(() => {
      dispatch(removeTaskGroup(id));
    });
  };
};

export const updateTasks = (id, tasks) => {
  return async (dispatch) => {
    dispatch(dndSort(id, tasks));
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

export const setActiveTasks = (id) => {
  return {
    type: "SET_ACTIVE_TASKS",
    payload: id
  };
}

export const dndSort = (id, tasks) => {
  return {
    type: "DND_SORT_TASKS",
    id: id,
    payload: tasks
  };
}
