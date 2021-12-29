import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; 

import style from './TasksGroup.module.scss';

const TasksGroup = () => {
    return (
      <ul className={ style.tasksGroup }>
        <li>
          <span>Test</span>
          <button className={style.remove}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
        </li>
        <li>
          <span>Test</span>
          <button className={style.remove}>
            <FontAwesomeIcon icon={faTimes} color="#50505061" />
          </button>
        </li>
        <li>
          <span>Test</span>
          <button className={style.remove}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
        </li>
        <li>
          <span>Test</span>
          <button className={style.remove}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
        </li>
        <li>
          <span>Test</span>
          <button className={style.remove}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
        </li>
      </ul>
    );
}

export default TasksGroup
