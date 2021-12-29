import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from '@fortawesome/free-solid-svg-icons' 
import { TasksGroup } from "..";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct }) => {

  const todos = [
    { title: "Create", color: "#42B883" },
    { title: "Read", color: "#e29c1a" },
    { title: "Update", color: "#2238b4" },
    { title: "Delete", color: "#f30909" }
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
