import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from '@fortawesome/free-solid-svg-icons' 
import { TasksGroup } from "..";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct }) => {

    return (
      <div className={`${style.sidebar} ${sidebarAct ? style.active : ""}`}>
        <div className={style.allBtn}>
          <h5>
            <FontAwesomeIcon size="xs" icon={faListUl} /> All Tasks
          </h5>
        </div>
        <TasksGroup/>
      </div>
    );
}

export default Sidebar
