import axios from "axios";
import { removeActiveTasks } from "./tasksGroup";

export const fetchTasks = () => {
  return async (dispatch) => {
    await axios.get(`/tasks`).then(({ data }) => {
      dispatch(setTasks(data));
    });
  };
};

export const onAddTask = (task) => {
    return async (dispatch) => {
        await axios.post(`/tasks`, task);
        dispatch(addTask(task));
    }
}

export const removeTask = (groupId, taskId) => {
  return async (dispatch) => {
    dispatch(remove(taskId));
    dispatch(removeActiveTasks(groupId, taskId));
    await axios.delete(`/tasks/${taskId}`);
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

export const remove = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: id
  }
}