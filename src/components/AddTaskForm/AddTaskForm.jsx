import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { reduxForm } from "redux-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import style from "./AddTaskForm.module.scss";

const AddTaskForm = ({
  visible,
  toggleAddForm,
  handleFunction,
  activeTitle = "",
  activeDescription = "",
  buttonLabel,
}) => {
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputDescriptionValue, setInputDescriptionValue] = useState("");
  const taskFromRef = useRef();

  useEffect(() => {
    setInputTitleValue(activeTitle);
    setInputDescriptionValue(activeDescription);
  }, [activeTitle, activeDescription]);

  const setTitle = (e) => {
    setInputTitleValue(e.currentTarget.value);
  };
  const setDescription = (text) => {
    setInputDescriptionValue(text);
  };

  const handleTask = () => {
    if (inputTitleValue !== "" || inputDescriptionValue !== "") {
      handleFunction(inputTitleValue, inputDescriptionValue);
    }
    setInputTitleValue("");
    setInputDescriptionValue("");
  };

  return (
    <div
      ref={taskFromRef}
      className={`${style.addTaskForm} ${visible ? style.active : ""}`}
    >
      <button className={style.close} onClick={toggleAddForm}>
        <FontAwesomeIcon icon={faTimes} color="#50505063" />
      </button>
      <TaskForm
        onSubmit={handleTask}
        inputTitleValue={inputTitleValue}
        inputDescriptionValue={inputDescriptionValue}
        setTitle={setTitle}
        setDescription={setDescription}
        buttonLabel={buttonLabel}
        ClassicEditor={ClassicEditor}
      />
    </div>
  );
};

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Task Title"
          value={props.inputTitleValue}
          onChange={props.setTitle}
          id="floatingTitle"
        />
        <label htmlFor="floatingTitle">Task Title</label>
      </div>
      <div>
        <CKEditor
          editor={props.ClassicEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "blockQuote",
              "link",
              "numberedList",
              "bulletedList",
              "|",
              "undo",
              "redo",
            ],
          }}
          data={props.inputDescriptionValue}
          onChange={(event, editor) => {
            const data = editor.getData();
            props.setDescription(data);
          }}
        />
      </div>
      <button
        disabled={(props.inputTitleValue || props.inputDescriptionValue) === ""}
        type="submit"
      >
        {props.buttonLabel}
      </button>
    </form>
  );
};

const TaskForm = reduxForm({ form: "add-task" })(Form);

export default AddTaskForm;
