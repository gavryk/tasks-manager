import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import style from "./TasksGroup.module.scss";

const TasksGroup = ({ todos }) => {
  return (
    <ul className={style.tasksGroup}>
      {todos.map((el) => (
        <li key={`${el.id}`} className={`${ el.active ? style.active : '' }`}>
          <span className={`${style.bullet}`} style={{backgroundColor: el.color ? el.color : '#0a93ee'}} ></span>
          <span className={style.title}>{el.title}</span>
          <button className={style.remove}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksGroup;
