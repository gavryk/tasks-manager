import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddButton, Task } from "../..";
import { onAddTask } from "../../../redux/actions/tasks";
import { setActiveTasks, updateTasks } from "../../../redux/actions/tasksGroup";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import style from "./Tasks.module.scss";

const Tasks = React.memo(({ activeTasks }) => {
  const dispatch = useDispatch();
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);
  const { id } = useParams();

  useEffect(() => {
    dispatch(setActiveTasks(id));
  }, [dispatch, id, groups]);

  const toggleTest = () => {
    const task = {
      id: Math.random().toString(36).substr(2, 15),
      groupId: id,
      title: "Test Task",
      description: "Test Description",
      done: false,
    };
    dispatch(onAddTask(task));
    dispatch(setActiveTasks(id));
  };

  const handleOnDragEnd = (result) => {
    const items = Array.from(activeTasks.tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    dispatch(updateTasks(id, items));
  }

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
                      {(provided) => <Task {...task} provided={provided} />}
                    </Draggable>
                  );
                })}
              <AddButton title="Add New Task" toggle={toggleTest} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Tasks;
