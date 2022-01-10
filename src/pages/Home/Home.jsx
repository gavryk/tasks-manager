import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTasks } from '../../redux/actions/tasksGroup';

const Home = ({tasks}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTasks({}));
    }, [dispatch])

    return (
      <div>
        {tasks &&
          tasks.map(
            (group) =>
              group.tasks.length > 0 && (
                <>
                  <h3>{group.title}</h3>
                  <ul>
                      {
                          group.tasks.map((t) => {
                              return (
                                  <li>{t.title}</li>
                              )
                          })
                      }
                  </ul>
                </>
              )
          )}
      </div>
    );
}

export default Home
