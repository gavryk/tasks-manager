import React from "react";
import style from "./Task.module.scss";

const Task = ({ title, description, provided }) => {
  
  return (
    <div
      className={style.taskCard}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
    >
      <div className={style.taskTitle}>
        <h2>{title}</h2>
      </div>
      <div className={style.taskDescription}>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Task;
