import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { reduxForm } from 'redux-form';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import style from './AddTaskForm.module.scss';

const AddTaskForm = ({ visible, toggleAddForm, addTask }) => {
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputDescriptionValue, setInputDescriptionValue] = useState("");
  const taskFromRef = useRef();

  const setTitle = (e) => {
    setInputTitleValue(e.currentTarget.value);
  };
  const setDescription = (text) => {
    setInputDescriptionValue(text);
  };

  const handleTask = () => {
    if (inputTitleValue !== "") {
      addTask(inputTitleValue, inputDescriptionValue);
      inputTitleValue("");
      inputDescriptionValue("");
    }
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
          data={props.inputDescriptionValue}
          onChange={(event, editor) => {
            const data = editor.getData();
            props.setDescription(data);
          }}
        />
      </div>
      {/* <div className="form-floating">
        <textarea
          className="form-control form-control-l"
          type="text"
          placeholder="Task Description"
          value={props.inputDescriptionValue}
          onChange={props.setDescription}
          id="floatingTextarea"
        />
        <label htmlFor="floatingTextarea">Task Description</label>
      </div> */}
      <button type="submit">Add Task</button>
    </form>
  );
};

const TaskForm = reduxForm({ form: "add-task" })(Form);

export default AddTaskForm;
