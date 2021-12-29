import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from '@fortawesome/free-solid-svg-icons' 
import { TasksGroup } from "..";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct }) => {

  const todos = [
    { title: "Create", color: "#48e9a0" },
    { title: "Read", color: "#f3b94c" },
    { title: "Update", color: "#da46df" },
    { title: "Delete", color: "#f54545" }
  ];

    return (
      <div className={`${style.sidebar} ${sidebarAct ? style.active : ""}`}>
        <div className={style.allBtn}>
          <h5>
            <FontAwesomeIcon size="xs" icon={faListUl} /> All Tasks
          </h5>
        </div>
        <TasksGroup todos={todos} />
      </div>
    );
}

export default Sidebar
