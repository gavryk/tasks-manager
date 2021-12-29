import React, { useState } from "react";
import { Header, Sidebar } from "./components";

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(true);

  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  return (
    <div className="todo-wrapper">
      <Sidebar sidebarAct={sidebarActive} />
      <div className="main">
        <Header handleSidebar={handleSidebar} sidebarAct={sidebarActive} />
      </div>
    </div>
  );
}

export default App;
