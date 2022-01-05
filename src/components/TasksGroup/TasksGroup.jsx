import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import style from "./TasksGroup.module.scss";

const TasksGroup = ({ group, removeGroup }) => {
  const [beforeDel, setBeforeDel] = useState(false);

  const handleRemoveGroup = (id) => {
    setBeforeDel(true);
    setTimeout(() => {
      removeGroup(id);
    }, 400);
  }

  return (
    <li
      key={`${group.id}`}
      className={`${style.groupEl} ${group.active ? style.active : ""} ${beforeDel && style.beforeDel}`}
    >
      <span
        className={`${style.bullet}`}
        style={{ backgroundColor: group.color ? group.color : "#0a93ee" }}
      ></span>
      <span className={style.title}>{group.title}</span>
      <button
        className={style.remove}
        onClick={() => handleRemoveGroup(group.id)}
      >
        <FontAwesomeIcon icon={faTimes} color="#50505063" />
      </button>
    </li>
  );
};

export default TasksGroup;
