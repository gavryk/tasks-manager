import React from "react";
import style from "./Task.module.scss";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const Task = ({ id, title, description, removable, handleRemoveTask, done, checkable }) => {
  return (
    <div className={`${style.taskCard} ${checkable ? style.checkableTask : ''}`}>
      {
        checkable && (
          <div className={`${style.check} ${done ? style.done : ''}`}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        )
      }
      <div className={style.taskTitle}>
        <h2>{title}</h2>
      </div>
      <div className={style.taskDescription}>
        <span>{parse(description)}</span>
      </div>

      {removable && (
        <button className={style.remove} onClick={() => handleRemoveTask(id)}>
          <FontAwesomeIcon icon={faTimes} color="#50505063" />
        </button>
      )}
    </div>
  );
};

export default Task;
