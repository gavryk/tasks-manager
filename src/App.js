import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Sidebar, Tasks } from "./components";
import { useSelector } from "react-redux";
import { fetchTasksGroups } from "./redux/actions/tasksGroup";
import { Route, Routes } from "react-router-dom";


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



  return (
    <div className="todo-wrapper">
      <Sidebar sidebarAct={sidebarActive} items={groups} />
      <div className="main">
        <Header handleSidebar={handleSidebar} sidebarAct={sidebarActive} />
        <Routes>
          <Route exact path="/" element={<h1>Main</h1>} />
          <Route
            path="/list/:id"
            element={<Tasks />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
