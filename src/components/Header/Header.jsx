import React from 'react';
import style from "./Header.module.scss";

const Header = ({ handleSidebar, sidebarAct, activeTasks }) => {
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
        <h1>{activeTasks.title ? activeTasks.title : "All Tasks"}</h1>
      </div>
    </div>
  );
};

export default Header
