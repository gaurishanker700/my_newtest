// Header.js
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../redux/themeSlice";
// import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa";

// const Header = () => {
//   const mode = useSelector((state) => state.theme.mode); // Get current theme from Redux
//   const dispatch = useDispatch();

//   // Log the mode to debug
//   console.log("Current mode in Redux: ", mode);

//   return (
//     <header className={`flex justify-between items-center px-6 py-4 border-b shadow-md ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//       {/* Logo and other content on the left */}
//       <div className="flex items-center">
//         <button className="p-2 text-green-600 hover:bg-green-100 rounded">
//           <FaBars size={20} />
//         </button>
//         <span className="text-2xl font-bold text-green-600 hidden sm:block">DoIt</span>
//       </div>

//       {/* Icons aligned to the right */}
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-600 hover:text-green-600">
//           <FaSearch size={20} />
//         </button>
//         <button
//           className="text-gray-600 hover:text-green-600"
//           onClick={() => dispatch(toggleTheme())} // Dispatch the toggleTheme action
//         >
//           {mode === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { GiBeveledStar } from "react-icons/gi";
const Header = ({ onToggleSidebar }) => {
  const mode = useSelector((state) => state.theme.mode); // Get current theme from Redux
  const dispatch = useDispatch();

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 border-b shadow-md ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo and other content on the left */}
      <div className="flex items-center"> <button className="p-2 text-green-600 hover:bg-green-100 rounded" onClick={onToggleSidebar}> <FaBars size={20} /> </button> <GiBeveledStar size={30} className="text-green-600 ml-2" /> <span className="text-2xl font-bold text-green-600 hidden sm:block ml-2"> DoIt </span> </div>

      {/* Icons aligned to the right */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-green-600">
          <FaSearch size={20} />
        </button>
        <button
          className="text-gray-600 hover:text-green-600"
          onClick={() => dispatch(toggleTheme())} // Dispatch the toggleTheme action
        >
          {mode === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
