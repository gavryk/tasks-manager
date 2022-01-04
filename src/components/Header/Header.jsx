import React from 'react';
import style from "./Header.module.scss";

const Header = ({ handleSidebar, sidebarAct }) => {
  return (
    <div className={`${style.headerWrapper}`}>
      <div
        className={`${style.burger} ${sidebarAct ? style.active : ""}`}
        onClick={handleSidebar}
      >
        <span></span>
      </div>
    </div>
  );
};

export default Header
