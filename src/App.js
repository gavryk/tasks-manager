import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Sidebar, Tasks } from "./components";
import { useSelector } from "react-redux";
import { fetchTasksGroups } from "./redux/actions/tasksGroup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";


const App = () => {
  const dispatch = useDispatch();
  const [sidebarActive, setSidebarActive] = useState(true);
  const { groups } = useSelector(({ tasksGroup }) => tasksGroup);
  const { activeTasks } = useSelector(({ tasksGroup }) => tasksGroup);

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
        <Header
          handleSidebar={handleSidebar}
          sidebarAct={sidebarActive}
          activeTasks={activeTasks}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/list/:id"
            element={<Tasks activeTasks={activeTasks} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
