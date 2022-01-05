import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Sidebar } from "./components";
import { useSelector } from "react-redux";
import { deleteTaskGroup, fetchTasksGroups, postTaskGroup } from "./redux/actions/tasksGroup";


const App = () => {
  const dispatch = useDispatch();
  const [sidebarActive, setSidebarActive] = useState(true);
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);

  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  useEffect(() => {
    dispatch(fetchTasksGroups());
  }, [dispatch]);

  const addGroup = (task) => {
    dispatch(postTaskGroup(task));
  }

  const removeGroup = (id) => {
    dispatch(deleteTaskGroup(id));
  }

  return (
    <div className="todo-wrapper">
      <Sidebar
        sidebarAct={sidebarActive}
        items={groups}
        addGroup={addGroup}
        removeGroup={removeGroup}
      />
      <div className="main">
        <Header handleSidebar={handleSidebar} sidebarAct={sidebarActive} />
      </div>
    </div>
  );
}

export default App;
