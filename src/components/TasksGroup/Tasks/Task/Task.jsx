import React, { useState } from "react";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";

import style from "./Task.module.scss";
import { AddTaskForm } from "../../..";

const Task = ({
  id,
  title,
  description,
  removable,
  handleRemoveTask,
  done,
  checkable,
  handleDoneTask,
  handleEditTask
}) => {
  const [editMode, setEditMode] = useState(false);

  const check = () => {
    handleDoneTask(id);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const edit = (title, description) => {
    handleEditTask(id, title, description);
    setEditMode(false);
  };

  return (
    <div
      className={`${style.taskCard} ${checkable ? style.checkableTask : ""} ${
        done ? style.done : ""
      }`}
    >
      {checkable ? (
        <div className={`${style.check}`} onClick={check}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      ) : (
        <div
          className={`${style.status} ${
            done ? style.statusDone : style.statusInProcess
          }`}
        >
          <span>{done ? "Complete" : "In Process"}</span>
        </div>
      )}
      <div className={style.taskTitle}>
        <h2>{title}</h2>
      </div>
      <div className={style.taskDescription}>{parse(description)}</div>

      {removable && (
        <>
          <button className={style.remove} onClick={() => handleRemoveTask(id)}>
            <FontAwesomeIcon icon={faTimes} color="#50505063" />
          </button>
          <button onClick={handleEditMode} className={style.editBtn}>
            <FontAwesomeIcon icon={faEdit} color="#50505063" />
          </button>
        </>
      )}

      {editMode && (
        <div className={style.editForm}>
          <AddTaskForm
            visible={editMode}
            handleFunction={edit}
            toggleAddForm={handleEditMode}
            activeTitle={title}
            activeDescription={description}
            buttonLabel="Edit"
          />
        </div>
      )}
    </div>
  );
};

export default Task;
