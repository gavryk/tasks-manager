import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddButton, Task } from "../..";
import { getActiveTasks } from "../../../redux/actions/tasksGroup";

import style from "./Tasks.module.scss";

const Tasks = () => {
  const dispatch = useDispatch();
  const { activeTasks } = useSelector(({ tasksGroup }) => tasksGroup);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getActiveTasks(id));
  }, [id, dispatch]);

  const toggleTest = () => {
    console.log(id);
  }

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
          })
        }
        <AddButton title="Add New Task" toggle={toggleTest} />
    </div>
  );
};

export default Tasks;
