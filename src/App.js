import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Sidebar } from "./components";
import { useSelector } from "react-redux";
import { addTasksGroup } from "./redux/actions/tasksGroup";

const App = () => {
  const dispatch = useDispatch();
  const [sidebarActive, setSidebarActive] = useState(true);
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);

  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  const addGroup = (task) => {
    dispatch(addTasksGroup(task));
  }

  return (
    <div className="todo-wrapper">
      <Sidebar 
        sidebarAct={sidebarActive} 
        items={groups} 
        addGroup={addGroup} 
      />
      <div className="main">
        <Header handleSidebar={handleSidebar} sidebarAct={sidebarActive} />
      </div>
    </div>
  );
}

export default App;
