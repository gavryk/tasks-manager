import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Task from '../../components/TasksGroup/Tasks/Task/Task';
import { setActiveTasks } from '../../redux/actions/tasksGroup';

import style from './Home.module.scss';

const Home = ({tasks}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTasks({}));
    }, [dispatch])

    return (
      <div className={style.allTasksWrapper}>
        {tasks &&
          tasks.map(
            (group) =>
              group.tasks.length > 0 && (
                <div key={group.id} className={ style.taskGroup }>
                  <h3 className={ style.groupTitle } style={{color: group.color}}>{group.title}</h3>
                  <div className={ style.tasksList }>
                      {
                          group.tasks.map((t) => {
                              return (
                                  <Task key={t.id} {...t} />
                              )
                          })
                      }
                  </div>
                </div>
              )
          )}
      </div>
    );
}

export default Home
