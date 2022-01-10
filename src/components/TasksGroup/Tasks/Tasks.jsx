import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActiveTasks } from "../../../redux/actions/tasksGroup";

import style from "./Tasks.module.scss";

const Tasks = () => {
    const dispatch = useDispatch();
    const { activeTasks } = useSelector(({ tasksGroup }) => tasksGroup);
    const { id } = useParams();
  
  useEffect(() => {
    dispatch(getActiveTasks(id));
  }, [id, dispatch]);

  return (
    <div>
      <div className={style.tasksTitle}>
          <h1 style={{color: activeTasks.color}}>{activeTasks.title}</h1>
      </div>

      {
        activeTasks.tasks && 
        activeTasks.tasks.map((task) => {
            return (
                <li>{task.title}</li>
            )
        }
      )}
    </div>
  );
};

export default Tasks;
