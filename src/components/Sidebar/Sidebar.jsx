import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons"; 
import { AddButton, AddGroupForm, TasksGroup } from "..";
import { useSelector, useDispatch } from "react-redux";

import style from './Sidebar.module.scss';
import { selectGroup } from '../../redux/actions/tasksGroup';

const Sidebar = ({ sidebarAct, items, addGroup, removeGroup }) => {
  const [visibleAddPopup, setVisibleAddPopup] = useState(false);
   const dispatch = useDispatch();
  const { selectedGroup } = useSelector(({ tasksGroup }) => tasksGroup);

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

  const selectItem = (id) => {
    dispatch(selectGroup(id));
  };

  return (
    <div className={`${style.sidebar} ${sidebarAct ? style.active : ""}`}>
      {items.length !== 0 && (
        <div className={style.allBtn} onClick={() => selectItem(null)}>
          <h5 className={`${ selectedGroup === null && style.active }`}>
            <FontAwesomeIcon size="xs" icon={faListUl} /> All Tasks
          </h5>
        </div>
      )}
      {items.length !== 0 && (
        <ul className={style.tasksGroup}>
          {items.map((group) => (
            <TasksGroup
              key={group.id}
              group={group}
              removeGroup={removeGroup}
              selectItem={selectItem}
              selectedGroup={selectedGroup}
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
