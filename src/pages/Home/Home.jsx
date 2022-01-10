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
            
        </div>
    )
}

export default Home
