import React, { useState } from 'react';
import { reduxForm } from "redux-form";

const AddGroupForm = ({addGroup}) => {
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputColorValue, setInputColorValue] = useState("#000000");

    const setName = (e) => {
        setInputNameValue(e.currentTarget.value);
    }
    const setColor = (e) => {
        setInputColorValue(e.currentTarget.value);
    };

    const handleGroup = () => {
        if (inputNameValue !== '') {
          addGroup(inputNameValue, inputColorValue);
        }
        setInputNameValue("");
        setInputColorValue("#000000");
    };

    return (
      <div>
        <GroupForm
          onSubmit={handleGroup}
          inputNameValue={inputNameValue}
          inputColorValue={inputColorValue}
          setName={setName}
          setColor={setColor}
        />
      </div>
    );
}

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        <input
          className="form-control form-control-l"
          type="text"
          placeholder="Group Name"
          value={props.inputNameValue}
          onChange={props.setName}
        />
      </label>
      <label>
        <input
          type="color"
          value={props.inputColorValue}
          onChange={props.setColor}
        />
      </label>
      <button type="submit">Add Group</button>
    </form>
  );
};

const GroupForm = reduxForm({ form: "add-group" })(Form);

export default AddGroupForm;
