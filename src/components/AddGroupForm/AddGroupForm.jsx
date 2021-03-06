import React, { useRef, useState, useEffect } from 'react';
import { reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; 

import style from './AddGroupForm.module.scss';

const AddGroupForm = ({ handleFunction, visible, toggleAddPopup, buttonLabel, activeTitle = '' }) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputColorValue, setInputColorValue] = useState("#000000");
  const popupRef = useRef();

  useEffect(() => {
    setInputNameValue(activeTitle);
  }, [activeTitle]);

  const setName = (e) => {
    setInputNameValue(e.currentTarget.value);
  };
  const setColor = (e) => {
    setInputColorValue(e.currentTarget.value);
  };

  const handleGroup = () => {
    if (inputNameValue !== "") {
      handleFunction(inputNameValue, inputColorValue);
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
        buttonLabel={buttonLabel}
      />
    </div>
  );
};

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-floating">
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="Group Name"
          value={props.inputNameValue}
          onChange={props.setName}
          id="floatingInput"
        />
        <label htmlFor="floatingInput">Group Name</label>
      </div>
      <div className={style.colorField}>
        <span>Pin Color:</span>
        <input
          type="color"
          className="form-control form-control-color"
          value={props.inputColorValue}
          onChange={props.setColor}
          title="Choose your color"
        ></input>
      </div>
      <button type="submit">{props.buttonLabel}</button>
    </form>
  );
};

const GroupForm = reduxForm({ form: "add-group" })(Form);

export default AddGroupForm;
