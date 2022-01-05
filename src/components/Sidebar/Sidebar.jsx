import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons"; 
import { AddButton, AddGroupForm, TasksGroup } from "..";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct, items, addGroup, removeGroup }) => {
  const [visibleAddPopup, setVisibleAddPopup] = useState(false);

  const toggleAddPopup = () => {
    setVisibleAddPopup(!visibleAddPopup);
  };

  const handleGroup = (name, color) => {
    const task = {
      id: Math.random().toString(36).substr(2, 15),
      title: name,
      color: color,
      active: false,
    };

    addGroup(task);
    setVisibleAddPopup(!visibleAddPopup);
  };

  return (
    <div className={`${style.sidebar} ${sidebarAct ? style.active : ""}`}>
      <div className={style.allBtn}>
        <h5>
          <FontAwesomeIcon size="xs" icon={faListUl} /> All Tasks
        </h5>
      </div>
      {items.length !== 0 && (
        <ul className={style.tasksGroup}>
          {items.map((group) => (
            <TasksGroup
              key={group.id}
              group={group}
              removeGroup={removeGroup}
            />
          ))}
        </ul>
      )}
      <AddButton toggle={toggleAddPopup} title="Add Group" />
      <AddGroupForm
        visible={visibleAddPopup}
        addGroup={handleGroup}
        toggleAddPopup={toggleAddPopup}
      />
    </div>
  );
};

export default Sidebar
