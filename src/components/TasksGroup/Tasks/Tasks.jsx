import React from 'react';
import { useParams } from 'react-router-dom';

import style from './Tasks.module.scss';

const Tasks = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Tasks { id }</h1>
        </div>
    )
}

export default Tasks
