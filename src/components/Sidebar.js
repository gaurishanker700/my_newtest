// import React from "react";
// import TaskStatusChart from "./TaskStatusChart";
// import {
//   FaTasks,
//   FaCalendarDay,
//   FaStar,
//   FaClipboard,
//   FaUserAlt,
//   FaPlus,
// } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../redux/themeSlice";
// const Sidebar = () => {
//   const mode = useSelector((state) => state.theme.mode); // Get current theme from Redux
//   const dispatch = useDispatch();
//   return (
//     <div className="bg-white h-screen w-64 p-4 flex flex-col border-r">
//       <div className="bg-green-50 h-screen w-64 p-4 flex flex-col border-r mt-10">
//         {/* Profile Section */}
//         <div className="relative flex flex-col items-center mt-0">
//           {/* Top half with white background */}
//           <div className="w-full py-4 mt-0 bg-green-50 pb-4 flex flex-col items-center relative z-10">
//             <img
//               src="/girl.jpg" // Correctly reference the image from the public folder
//               alt="User"
//               className="rounded-full  -mt-20 w-24 h-24 mb-4 shadow-lg relative z-20"
//             />
//           </div>
//           {/* Bottom half with green background */}
//           <div className="w-full bg-green-50 -mt-4 relative z-10">
//             {/* Additional content */}
//             <h3 className="font-semibold text-lg text-gray-800 text-center mt-0 relative z-20">
//               Hey, ABCD
//             </h3>
//           </div>
//           {/* Green overlay to cover bottom half of the image */}
//           <div className="absolute top-1/2 w-24 h-12 bg-green-50"></div>
//         </div>

//         <section className="bg-white mt-6 p-4 rounded shadow-sm">
//           <ul className="space-y-2">
//             <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer text-gray-700">
//               <FaTasks className="text-green-600 mr-3" />
//               <span>All Tasks</span>
//             </li>
//             <li className="flex items-center p-3 rounded bg-green-200 cursor-pointer text-gray-900 font-bold">
//               <FaCalendarDay className="text-green-600 mr-3" />
//               <span>Today</span>
//             </li>
//             <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer text-gray-700">
//               <FaStar className="text-yellow-500 mr-3" />
//               <span>Important</span>
//             </li>
//             <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer text-gray-700">
//               <FaClipboard className="text-blue-600 mr-3" />
//               <span>Planned</span>
//             </li>
//             <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer text-gray-700">
//               <FaUserAlt className="text-purple-600 mr-3" />
//               <span>Assigned to me</span>
//             </li>
//           </ul>
//         </section>

//         {/* Add List Button */}
//         <section className="bg-white mt-6 p-4 rounded shadow-sm">
//           <button className="flex items-center justify-center p-3 bg-white text-black rounded-md w-full hover:bg-green-200">
//             <FaPlus className="mr-2" />
//             Add List
//           </button>
//         </section>

//         {/* Footer Section */}
//         <div className="mt-8">
//           <div className="bg-white rounded-lg shadow-md p-4 text-center">
//             <h4 className="text-sm text-gray-500 mb-4">Today Tasks</h4>
//             <div className="flex justify-center items-center  mt-4">
//               <TaskStatusChart className="mt-4" />{" "}
//               {/* Render the donut-style chart */}
//             </div>
//             <p className="mt-4 text-lg font-bold text-gray-800">11</p>
//             <div className="flex justify-around text-xs mt-2">
//               <span className="text-green-600">Pending</span>
//               <span className="text-gray-500">Completed</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import TaskStatusChart from "./TaskStatusChart";
import {
  FaTasks,
  FaCalendarDay,
  FaStar,
  FaClipboard,
  FaUserAlt,
  FaPlus,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const Sidebar = () => {
  const mode = useSelector((state) => state.theme.mode); // Get current theme from Redux
  const dispatch = useDispatch();

  return (
    <div
      className={`h-screen w-64 p-4 flex flex-col border-r ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`h-screen w-64 p-4 flex flex-col border-r mt-10 ${
          mode === "dark" ? "bg-gray-800" : "bg-green-50"
        }`}
      >
        {/* Profile Section */}
        <div className="relative flex flex-col items-center mt-0">
          {/* Top half with white background */}
          <div
            className={`w-full py-4 mt-0 pb-4 flex flex-col items-center relative z-10 ${
              mode === "dark" ? "bg-gray-800" : "bg-green-50"
            }`}
          >
            <img
              src="/girl.jpg" // Correctly reference the image from the public folder
              alt="User"
              className="rounded-full -mt-20 w-24 h-24 mb-4 shadow-lg relative z-20"
            />
          </div>
          {/* Bottom half with green background */}
          <div
            className={`w-full -mt-4 relative z-10 ${
              mode === "dark" ? "bg-gray-800" : "bg-green-50"
            }`}
          >
            {/* Additional content */}
            <h3 className="font-semibold text-lg text-center mt-0 relative z-20">
              Hey, ABCD
            </h3>
          </div>
          {/* Green overlay to cover bottom half of the image */}
          <div
            className={`absolute top-1/2 w-24 h-12 ${
              mode === "dark" ? "bg-gray-800" : "bg-green-50"
            }`}
          ></div>
        </div>

        <section
          className={`mt-6 p-4 rounded shadow-sm ${
            mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <ul className="space-y-2">
            <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer">
              <FaTasks className="text-green-600 mr-3" />
              <span>All Tasks</span>
            </li>
            <li className="flex items-center p-3 rounded bg-green-200 cursor-pointer font-bold">
              <FaCalendarDay className="text-green-600 mr-3" />
              <span>Today</span>
            </li>
            <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer">
              <FaStar className="text-yellow-500 mr-3" />
              <span>Important</span>
            </li>
            <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer">
              <FaClipboard className="text-blue-600 mr-3" />
              <span>Planned</span>
            </li>
            <li className="flex items-center p-3 rounded hover:bg-green-200 cursor-pointer">
              <FaUserAlt className="text-purple-600 mr-3" />
              <span>Assigned to me</span>
            </li>
          </ul>
        </section>

        {/* Add List Button */}
        <section
          className={`mt-6 p-4 rounded shadow-sm ${
            mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <button className="flex items-center justify-center p-3 rounded-md w-full hover:bg-green-200">
            <FaPlus className="mr-2" />
            Add List
          </button>
        </section>

        {/* Footer Section */}
        <div className="mt-8">
          <div
            className={`rounded-lg shadow-md p-4 text-center ${
              mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h4 className="text-sm mb-4">Today Tasks</h4>
            <div className="flex justify-center items-center mt-4">
              <TaskStatusChart className="mt-4" />{" "}
              {/* Render the donut-style chart */}
            </div>
            <p className="mt-4 text-lg font-bold">11</p>
            <div className="flex justify-around text-xs mt-2">
              <span className="text-green-600">Pending</span>
              <span className="text-gray-500">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
