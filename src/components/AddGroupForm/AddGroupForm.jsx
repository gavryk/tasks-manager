import React, { useRef, useState } from 'react';
import { reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; 

import style from './AddGroupForm.module.scss';

const AddGroupForm = ({ addGroup, visible, toggleAddPopup }) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputColorValue, setInputColorValue] = useState("#000000");
  const popupRef = useRef();

  const setName = (e) => {
    setInputNameValue(e.currentTarget.value);
  };
  const setColor = (e) => {
    setInputColorValue(e.currentTarget.value);
  };

  const handleGroup = () => {
    if (inputNameValue !== "") {
      addGroup(inputNameValue, inputColorValue);
      setInputNameValue("");
      setInputColorValue("#000000");
    }
  };

  return (
    <div
      ref={popupRef}
      className={`${style.addGroupPopup} ${visible ? style.active : ""}`}
    >
      <button className={style.close} onClick={toggleAddPopup}>
        <FontAwesomeIcon icon={faTimes} color="#50505063" />
      </button>
      <GroupForm
        onSubmit={handleGroup}
        inputNameValue={inputNameValue}
        inputColorValue={inputColorValue}
        setName={setName}
        setColor={setColor}
      />
    </div>
  );
};

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          className="form-control form-control-l"
          type="text"
          placeholder="Group Name"
          value={props.inputNameValue}
          onChange={props.setName}
        />
      </div>
      <div className={style.colorField}>
        <span>Pin Color:</span>
        <input
          type="color"
          value={props.inputColorValue}
          onChange={props.setColor}
        />
      </div>
      <button type="submit">Add Group</button>
    </form>
  );
};

const GroupForm = reduxForm({ form: "add-group" })(Form);

export default AddGroupForm;
