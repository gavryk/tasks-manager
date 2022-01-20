import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import style from "./Header.module.scss";

const Header = ({ handleSidebar, sidebarAct, activeTasks }) => {
  const [editMode, setEditMode] = useState(false);

  const editTitle = () => {
    setEditMode(!editMode);
  }

  return (
    <div style={{ backgroundColor: activeTasks.color }} className={`${style.headerWrapper}`}>
      <div
        className={`${style.burger} ${sidebarAct ? style.active : ""}`}
        onClick={handleSidebar}
      >
        <span></span>
      </div>
      <div className={`
          ${style.tasksTitle} 
          ${activeTasks.color === '#ffffff' || !activeTasks.color ? style.white : ''}
        `}>
        <h1>
          {activeTasks.title ? ( !editMode ? activeTasks.title : 'Edit Mode') : "All Tasks"}
          {activeTasks.title && <button onClick={editTitle} className={style.editBtn}><FontAwesomeIcon icon={faEdit} /></button>}
        </h1>
      </div>
    </div>
  );
};

export default Header
