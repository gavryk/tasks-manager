import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddButton, Task } from "../..";
import { onAddTask } from "../../../redux/actions/tasks";
import { setActiveTasks } from "../../../redux/actions/tasksGroup";

import style from "./Tasks.module.scss";

const Tasks = React.memo(({ activeTasks }) => {
  const dispatch = useDispatch();
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);
  const { id } = useParams();

  useEffect(() => {
    dispatch(setActiveTasks(id));
  }, [dispatch, id, groups]);

  const toggleTest = () => {
    const task = {
      id: Math.random().toString(36).substr(2, 15),
      groupId: id,
      title: "Test Task",
      description: "Test Description",
      done: false,
    };
    dispatch(onAddTask(task));
    dispatch(setActiveTasks(id));
  };

  return (
    <div>
      <div className={style.tasksWrapper}>
        {activeTasks.tasks &&
          activeTasks.tasks.map((task) => {
            return <Task {...task} />;
          })}
        <AddButton title="Add New Task" toggle={toggleTest} />
      </div>
    </div>
  );
});

export default Tasks;
