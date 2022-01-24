import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddGroupForm } from '..';
import { editTaskGroup } from '../../redux/actions/tasksGroup';
import style from "./Header.module.scss";

const Header = ({ handleSidebar, sidebarAct, activeTasks }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const editTitle = () => {
    setEditMode(!editMode);
  }

  const handleEdit = (name, color) => {
    dispatch(editTaskGroup(activeTasks.id, name, color));
    setEditMode(false);
  }

  return (
    <div
      style={{ backgroundColor: activeTasks.color }}
      className={`${style.headerWrapper}`}
    >
      <div
        className={`${style.burger} ${sidebarAct ? style.active : ""}`}
        onClick={handleSidebar}
      >
        <span></span>
      </div>
      <div
        className={`
          ${style.tasksTitle} 
          ${
            activeTasks.color === "#ffffff" || !activeTasks.color
              ? style.white
              : ""
          }
        `}
      >
        {editMode ? (
          <AddGroupForm
            visible={editMode}
            toggleAddPopup={editTitle}
            buttonLabel="Edit"
            handleFunction={handleEdit}
            activeTitle={activeTasks.title}
          />
        ) : (
          <h1>
            {activeTasks.title ? activeTasks.title : "All Tasks"}
            {activeTasks.title && (
              <button onClick={editTitle} className={style.editBtn}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Header
