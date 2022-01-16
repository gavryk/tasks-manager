import axios from "axios";

export const fetchTasks = () => {
  return async (dispatch) => {
    await axios.get(`/tasks`).then(({ data }) => {
      dispatch(setTasks(data));
    });
  };
};

export const onAddTask = (task) => {
    return async (dispatch) => {
        await axios.post('/tasks', task);
        dispatch(addTask(task));
    }
}

export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const setTasks = (items) => {
  return {
    type: "SET_TASKS",
    payload: items,
  };
};