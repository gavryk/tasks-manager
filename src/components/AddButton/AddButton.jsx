import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import style from './AddButton.module.scss';

const AddButton = ({ title, toggle}) => {
  return (
    <button className={style.addButton} onClick={() => toggle()}>
      <FontAwesomeIcon icon={faPlus} color="#50505063" size="xs" />
      <span>{title}</span>
    </button>
  );
};

export default AddButton
