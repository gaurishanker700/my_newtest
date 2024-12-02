// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
// import { useSelector } from "react-redux"; // Import for theme management
// import "./styles/global.css";

// const App = () => {
//   const mode = useSelector((state) => state.theme.mode); // Access theme state

//   return (
//     <div
//       className={
//         mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
//       }
//     >
//       <div className="flex flex-col h-screen">
//         {/* Header */}
//         <Header />

//         <div className="flex flex-1">
//           {/* Sidebar - on the left */}
//           <div
//             className={`w-64 ${
//               mode === "dark" ? "bg-gray-800" : "bg-gray-200"
//             } h-full overflow-y-auto`}
//           >
//             <Sidebar />
//           </div>

//           {/* Main content area - AddTask and TaskList */}
//           <div className="flex-1 justify-between p-6 overflow-y-auto">
//             <AddTask />
//             <TaskList />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux"; // Import for theme management
import "./styles/global.css";

const App = () => {
  const mode = useSelector((state) => state.theme.mode); // Access theme state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header onToggleSidebar={handleToggleSidebar} />

        <div className="flex flex-1">
          {/* Sidebar - on the left */}
          {isSidebarOpen && (
            <div
              className={`w-64 ${
                mode === "dark" ? "bg-gray-800" : "bg-gray-200"
              } h-full overflow-y-auto`}
            >
              <Sidebar />
            </div>
          )}

          {/* Main content area - AddTask and TaskList */}
          <div className="flex-1 justify-between p-6 overflow-y-auto">
            <AddTask />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
