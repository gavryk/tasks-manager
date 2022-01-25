import axios from "axios";
import { completeActiveTasks, editTsk, removeActiveTasks } from "./tasksGroup";

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

export const doneTask = (groupId, taskId) => {
  return async (dispatch, getState) => {
    const { items } = getState().tasks;
    let doneTask = items.find((item) => item.id === taskId).done;
    
    dispatch(completeActiveTasks(groupId, taskId));
  
    await axios.patch(`/tasks/${taskId}`, { done: !doneTask });
  };
};

export const editTask = (id, title, description) => {
  return async (dispatch) => {
    //from tasksGroup Action
    dispatch(editTsk(id, title, description));
    axios.patch(`/tasks/${id}`, {title: title, description: description});
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

export const done = (taskId) => {
  return {
    type: "DONE_TASK",
    payload: taskId
  }
}