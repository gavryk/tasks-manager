import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Task } from "../..";
import { getActiveTasks } from "../../../redux/actions/tasksGroup";

import style from "./Tasks.module.scss";

const Tasks = ({activeTasks}) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getActiveTasks(id));
  }, [id, dispatch]);

  return (
    <div className={style.tasksWrapper}>
        {activeTasks.tasks &&
        activeTasks.tasks.map((task, index) => {
          return (
                <Task 
                    key={`${task.title}_${index}`} 
                    {...task} 
                />
            )
        })}
    </div>
  );
};

export default Tasks;
