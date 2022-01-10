import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTasks } from '../../redux/actions/tasksGroup';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTasks({}));
    }, [dispatch])

    return (
        <div>
            <h1>All Tasks</h1>
        </div>
    )
}

export default Home
