import React from "react";
import style from "./Task.module.scss";
import parse from "html-react-parser";

const Task = ({ title, description }) => {
  
  return (
    <div
      className={style.taskCard}
    >
      <div className={style.taskTitle}>
        <h2>{title}</h2>
      </div>
      <div className={style.taskDescription}>
        <span>{parse(description)}</span>
      </div>
    </div>
  );
};

export default Task;
