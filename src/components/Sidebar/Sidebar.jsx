import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import { AddButton, TasksGroup } from "..";

import style from './Sidebar.module.scss';

const Sidebar = ({ sidebarAct, items, addGroup }) => {
    const [visibleAddPopup, setVisibleAddPopup] = useState(false);
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputColorValue, setInputColorValue] = useState('#000000');

    const toggleAddPopup = () => {
      setVisibleAddPopup(!visibleAddPopup);
    }

    const handleGroup = (e) => {
      e.preventDefault();
      const task = {
        id: Math.random().toString(36).substr(2, 9),
        title: inputNameValue,
        color: inputColorValue,
        active: false
      };
      addGroup(task);
      setInputNameValue('');
      setInputColorValue("#000000");
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
          <form onSubmit={handleGroup}>
            <label>
              <input
                type="text"
                placeholder="Group Name"
                value={inputNameValue}
                onChange={(e) => setInputNameValue(e.target.value)}
              />
            </label>
            <label>
              <input
                type="color"
                value={inputColorValue}
                onChange={(e) => setInputColorValue(e.target.value)}
              />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
}

export default Sidebar
