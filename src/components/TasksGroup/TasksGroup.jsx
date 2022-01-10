import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from 'react-router-dom';

import style from "./TasksGroup.module.scss";

const TasksGroup = ({ group, removeGroup }) => {
  const [beforeDel, setBeforeDel] = useState(false);
  const navigate = useNavigate();

  const handleRemoveGroup = (id) => {
    setBeforeDel(true);
    setTimeout(() => {
      removeGroup(id);
      navigate('/');
    }, 300);

  }

  return (
    <li className={`${style.groupEl} ${beforeDel ? style.beforeDel : ""}`}>
      <NavLink to={`/list/${group.id}`} className={(navData) => navData.isActive ? style.active : ''}>
        <span
          className={`${style.bullet}`}
          style={{ backgroundColor: group.color ? group.color : "#0a93ee" }}
        ></span>
        <span className={style.title}>{group.title}</span>
      </NavLink>
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
