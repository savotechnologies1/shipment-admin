import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import setting from "../assets/setting_icon.png";
import shipment from "../assets/shipment_icon.png";
import address from "../assets/address_iocn.png";
import anomalies from "../assets/Anomalies_icon.png";
import topup from "../assets/topup_icon.png";
import cashon from "../assets/cashon_icon.png";
import userIcon from "../assets/user_icon.png";
import logoutIcon from "../assets/logout_icon.png";
import earnings from "../assets/earnings_icon.png";
import rules from "../assets/rules_icon.png";
import logo from "../assets/logo2.png";
import insta from "../assets/insta_iocn.png";
import facebook from "../assets/fb_icon.png";
import youtube from "../assets/yt_iocn.png";
import { Layout } from "lucide-react";

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  const toggleSideBar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("role"); // Remove role from storage
    navigate("/sign-in"); // Redirect to sign-in page
  };

  const switchRole = (newRole: "user" | "affiliate" | "admin") => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  // Define menu sections based on role
  const menuSections = {
    user: [
      {
        key: "ShipmentList",
        label: "Shipment List",
        icon: shipment,
        path: "shipment",
      },
      {
        key: "AddressBook",
        label: "Address Book",
        icon: address,
        path: "dashboard/addressbook",
      },
      {
        key: "Anomalies",
        label: "Anomalies",
        icon: anomalies,
        path: "dashboard/user-anomalies",
      },
      {
        key: "TopUp",
        label: "Top Up",
        icon: topup,
        path: "dashboard/user-topup",
      },
      {
        key: "CashOnDelivery",
        label: "Cash On Delivery",
        icon: cashon,
        path: "dashboard/cash-on-delivery",
      },
      {
        key: "UserProfile",
        label: "User Profile",
        icon: userIcon,
        path: "dashboard/user-profile",
      },
    ],
    affiliate: [
      {
        key: "Earnings",
        label: "Earnings",
        icon: earnings,
        path: "dashboard/earnings",
      },
      {
        key: "Assistance",
        label: "Assistance",
        icon: address,
        path: "dashboard/assistance",
      },
      {
        key: "Profile",
        label: "Profile",
        icon: userIcon,
        path: "dashboard/affiliate-profile",
      },
      { key: "Rules", label: "Rules", icon: rules, path: "dashboard/rules" },
    ],
    admin: [
      {
        key: "DailyOrder",
        label: "Daily Order",
        icon: shipment,
        path: "admin-dashboard",
      },
      {
        key: "OrderList",
        label: "Order List",
        icon: address,
        path: "admin-order",
      },
      {
        key: "Anomalies",
        label: "Anomalies",
        icon: userIcon,
        path: "admin-anomalies",
      },
      { key: "TopUp", label: "Top Up", icon: rules, path: "admin-topup" },
      {
        key: "CashOnDelivery",
        label: "Cash On Delivery ",
        icon: cashon,
        path: "admin-cashondelivery",
      },
      {
        key: "userProfile",
        label: "User Profile ",
        icon: userIcon,
        path: "admin-profile",
      },
    ],
  };

  return (
    <div className="  xl:relative  bg-[#213C70] flex h-[872px]  m-3 rounded-lg flex-col justify-between  fixed top-0 left-0 z-40 transition-all duration-300 ">
      <div
        className={` text-[#9DB2FF] transition-all duration-300 p-2 ${
          isOpen ? "w-72" : "w-20"
        }`}
      >
        {/* Toggle Sidebar Button */}
        <button
          onClick={toggleSideBar}
          className="absolute top-2 -right-5 bg-white text-black shadow-lg p-3 rounded-full xl:hidden"
        >
          {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>

        {/* Logo */}
    
<div className="items-center justify-center flex py-2 mb-4 border-b border-[#2B4ED2]">
  {isOpen && (
    <NavLink to="/">
      <img className="w-[208px] h-[60px] mt-2" src={logo} alt="Logo" />
    </NavLink>
  )}
</div>

        {/* Sidebar Menu */}
        <ul className="space-y-2 px-2">
          {(menuSections[role as keyof typeof menuSections] || []).map(
            (section) => (
              <li key={section.key}>
                <Link to={`/${section.path}`}>
                  <button
                    className={`flex items-center w-full py-3 xl:px-3 px-2 rounded-md hover:bg-[#2B4FD4] hover:text-[#fff] font-semibold ${
                      location.pathname.includes(section.path)
                        ? "bg-[#2B4FD4] text-[#fff]"
                        : ""
                    }`}
                  >
                    <img
                      src={section.icon}
                      alt={section.label}
                      className="w-6 mr-2"
                    />
                    {isOpen && (
                      <span className="block transition-all duration-300">
                        {section.label}
                      </span>
                    )}
                  </button>
                </Link>
              </li>
            )
          )}

          {/* Logout Button */}
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center w-full py-3 xl:px-3 px-2 rounded-md hover:bg-[#2B4FD4] hover:text-white font-semibold"
            >
              <img src={logoutIcon} alt="Logout" className="w-6 mr-2" />
              {isOpen && (
                <span className="block transition-all duration-300">
                  Log Out
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Logout Confirmation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ]">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[430px]">
              <h2 className=" text-xl md:text-2xl font-bold text-black">
                Ready to Leave?
              </h2>
              <p className="text-black mt-4">
                Select “Logout” below if you are ready to end your current
                session.
              </p>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2  text-gray-800 rounded-md "
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-[#213C70] text-white rounded-md hover:bg-red-700"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* ACCOUNT SWITCHER */}
      <div>
      {role !== "admin" && (
  <div>
        <div className="flex flex-col lg:flex-row justify-center  my-4 gap-2 hidden xl:flex">
          <button
            onClick={() => switchRole("user")}
            className={`px-3 py-1 rounded text-xs sm:text-sm ${
              role === "user"
                ? "bg-[#3D5EDB] text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            User Account
          </button>
          <button
            onClick={() => switchRole("affiliate")}
            className={`px-3 py-1 rounded text-xs sm:text-sm ${
              role === "affiliate"
                ? "bg-[#3D5EDB] text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Affiliate Account
          </button>
        </div>
        </div>
)}

        <div className="p-2 flex- flex-col items-center justify-center text-center hidden xl:flex">
          <h1 className="text-white hidden md:block md:text-lg font-semibold">
            Social Media Links
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            {/* Facebook */}
          <img className="w-8  cursor-pointer" src={facebook} alt="" />

            {/* Instagram */}
            <img className="w-8 cursor-pointer"  src={insta} alt="" />
            {/* YouTube */}
            <img className="w-8 cursor-pointer"  src={youtube} alt="" />
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default Sidebar;
