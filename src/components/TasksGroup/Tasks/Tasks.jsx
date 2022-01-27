import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddButton, Task } from "../..";
import {
  doneTask,
  editTask,
  onAddTask,
  removeTask,
} from "../../../redux/actions/tasks";
import { setActiveTasks, updateTasks } from "../../../redux/actions/tasksGroup";
import AddTaskForm from "../../AddTaskForm/AddTaskForm";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import style from "./Tasks.module.scss";

const Tasks = React.memo(({ activeTasks }) => {
  const dispatch = useDispatch();
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);
  const { id } = useParams();
  const [visibleTaskForm, setVisibleTaskForm] = useState(false);

  useEffect(() => {
    dispatch(setActiveTasks(id));
  }, [dispatch, id, groups]);

  const showAddForm = () => {
    setVisibleTaskForm(!visibleTaskForm);
  };

  const handleAddTask = (title, description) => {
    const task = {
      id: Math.random().toString(36).substr(2, 15),
      groupId: id,
      title: title,
      description: description,
      done: false,
    };
    dispatch(onAddTask(task));
    dispatch(setActiveTasks(id));
    dispatch(updateTasks(id, task));
    setVisibleTaskForm(false);
  };

  const handleOnDragEnd = (result) => {
    const items = Array.from(activeTasks.tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updateTasks(id, items));
  };

  const handleEditTask = (id, title, description) => {
    dispatch(editTask(id, title, description));
  };

  const handleDoneTask = (taskId) => {
    dispatch(doneTask(id, taskId));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(id, taskId));
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasksWrapper">
          {(provided) => (
            <div
              className={style.tasksWrapper}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {activeTasks.tasks &&
                activeTasks.tasks.map((task, index) => {
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <Task
                          // key={task.id}
                          {...task}
                          handleRemoveTask={handleRemoveTask}
                          handleDoneTask={handleDoneTask}
                          removable={true}
                          checkable={true}
                          handleEditTask={handleEditTask}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  );
                })}
              <AddButton title="Add New Task" toggle={showAddForm} />
              <AddTaskForm
                visible={visibleTaskForm}
                handleFunction={handleAddTask}
                toggleAddForm={showAddForm}
                buttonLabel="Add Task"
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Tasks;
