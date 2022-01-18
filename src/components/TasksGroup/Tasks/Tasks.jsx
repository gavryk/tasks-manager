import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddButton, Task } from "../..";
import { onAddTask, removeTask } from "../../../redux/actions/tasks";
import { setActiveTasks, updateTasks } from "../../../redux/actions/tasksGroup";
import AddTaskForm from "../../AddTaskForm/AddTaskForm";

import style from "./Tasks.module.scss";

const Tasks = React.memo(({ activeTasks }) => {
  const dispatch = useDispatch();
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);
  const { id } = useParams();
  const [visibleTaskForm, setVisibleTaskForm] = useState(false);

  useEffect(() => {
    dispatch(setActiveTasks(id));
  }, [dispatch, id, groups]);

  const showAddForm = () => {
    setVisibleTaskForm(!visibleTaskForm);
  };

  const handleAddTask = (title, description) => {
    const task = {
      id: Math.random().toString(36).substr(2, 15),
      groupId: id,
      title: title,
      description: description,
      done: false,
    };
    dispatch(onAddTask(task));
    dispatch(setActiveTasks(id));
    dispatch(updateTasks(id, task));
    setVisibleTaskForm(false);
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(id, taskId));
  }

  return (
    <div className={style.tasksWrapper}>
      {activeTasks.tasks &&
        activeTasks.tasks.map((task) => {
          return (
            <Task
              key={task.id}
              {...task}
              handleRemoveTask={handleRemoveTask}
              removable={true}
            />
          );
        })}
      <AddButton title="Add New Task" toggle={showAddForm} />
      <AddTaskForm
        visible={visibleTaskForm}
        addTask={handleAddTask}
        toggleAddForm={showAddForm}
      />
    </div>
  );
});

export default Tasks;
