import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import { AddButton, AddGroupForm, TasksGroup } from "..";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct, items, addGroup }) => {
    const [visibleAddPopup, setVisibleAddPopup] = useState(false);

    const toggleAddPopup = () => {
      setVisibleAddPopup(!visibleAddPopup);
    }

    const handleGroup = (name, color) => {
      const task = {
        id: Math.random().toString(36).substr(2, 9),
        title: name,
        color: color,
        active: false,
      };
      addGroup(task);
      setVisibleAddPopup(!visibleAddPopup);
    }

    return (
      <div className={`${style.sidebar} ${sidebarAct ? style.active : ""}`}>
        <div className={style.allBtn}>
          <h5>
            <FontAwesomeIcon size="xs" icon={faListUl} /> All Tasks
          </h5>
        </div>
        <TasksGroup todos={items} />
        <AddButton toggle={toggleAddPopup} title="Add Group" />
        <div
          className={`${style.addGroupPopup} ${
            visibleAddPopup ? style.active : ""
          }`}
        >
          <button className={style.close} onClick={toggleAddPopup}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
          
          <AddGroupForm addGroup={handleGroup} />
        </div>
      </div>
    );
}

export default Sidebar
