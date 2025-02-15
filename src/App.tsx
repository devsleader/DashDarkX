import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

const App :React.FC = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
