import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const Layout = () => {
  return (
    <div className="flex bg-[#F8FAFF] w-full">
      <Sidebar />
      <div className="flex-1 max-h-[100vh] h-[100vh] overflow-y-auto w-full ml-24 xl:ml-0">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
