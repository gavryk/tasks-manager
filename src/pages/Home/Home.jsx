import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Task from "../../components/TasksGroup/Tasks/Task/Task";
import { setActiveTasks } from "../../redux/actions/tasksGroup";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import style from "./Home.module.scss";

const Home = ({ tasks }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTasks());
  }, [dispatch]);

  return (
    <div className={style.allTasksWrapper}>
      {tasks &&
        tasks.map(
          (group) =>
            group.tasks.length > 0 && (
              <div key={group.id} className={style.taskGroup}>
                <h3 className={style.groupTitle} style={{ color: group.color }}>
                  {group.title}
                </h3>
                <div>
                  <DragDropContext>
                    <Droppable droppableId="tasksList">
                      {(provided) => (
                        <div
                          className={style.tasksList}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {group.tasks.map((t, index) => {
                            return (
                              <Draggable
                                key={t.id}
                                draggableId={t.id}
                                index={index}
                              >
                                {(provided) => (
                                  <Task key={t.id} {...t} provided={provided} />
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default Home;
