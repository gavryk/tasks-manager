import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons"; 
import { AddButton, AddGroupForm, TasksGroup } from "..";
import { useDispatch } from "react-redux";
import { deleteTaskGroup, postTaskGroup } from '../../redux/actions/tasksGroup';
import { NavLink } from "react-router-dom";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct, items }) => {
  const [visibleAddPopup, setVisibleAddPopup] = useState(false);
  const dispatch = useDispatch();

  const toggleAddPopup = () => {
    setVisibleAddPopup(!visibleAddPopup);
  };

  const handleGroup = (name, color) => {
    const task = {
      id: Math.random().toString(36).substr(2, 15),
      title: name,
      color: color,
      active: false,
      tasks: []
    };
    addGroup(task);
    setVisibleAddPopup(!visibleAddPopup);
  };

  const addGroup = (task) => {
    dispatch(postTaskGroup(task));
  };

  const removeGroup = (id) => {
    dispatch(deleteTaskGroup(id));
  };

  return (
    <div className={`${style.sidebar} ${sidebarAct ? style.active : ""}`}>
      <div>
        {items.length !== 0 && (
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? `${style.active} ${style.allBtn}`
                : style.allBtn
            }
          >
            <h5>
              <FontAwesomeIcon size="xs" icon={faListUl} /> All Tasks
            </h5>
          </NavLink>
        )}
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
          handleFunction={handleGroup}
          toggleAddPopup={toggleAddPopup}
          buttonLabel="Add Group"
        />
      </div>

      <div className={style.copyright}>
        <span>Developed By Oleg Gvozd</span>
      </div>
    </div>
  );
};

export default Sidebar
