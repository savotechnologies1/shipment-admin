import { useEffect, useState } from "react";
import search from "../assets/search_1.png";
import img from "../assets/profileimg.png";
import cart from "../assets/cart.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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


  const getProfileLink = () => {
    if (role === "user") return "/dashboard/user-profile";
    if (role === "affiliate") return "/dashboard/affiliate-profile";
    if (role === "admin") return "/admin-profile";
    return "/sign-in"; // Default fallback
  };
  
  const getTopUpLink = () => {
    if (role === "user") return "/dashboard/user-topup";
    if (role === "affiliate") return "/dashboard/user-topup";
    if (role === "admin") return "/admin-topup";
    return "/sign-in"; // Default fallback
  };

  return (
    <div className="bg-[#213C70] p-4 shadow rounded-md">
      <div className="flex items-center justify-between md:justify-between">
        <div className="hidden md:hidden lg:flex text-xs xl:text-lg text-white font-medium gap-4 cursor-pointer">
          <p>Ship Now</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Guide</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="rounded-lg bg-[#E9ECF1] md:flex hidden p-2 items-center gap-2 w-[286px]">
            <input
              className="px-2 bg-transparent w-full outline-none placeholder-black font-semibold"
              type="text"
              placeholder="Search"
            />
            <img src={search} alt="search icon" />
          </div>

          <div className="flex gap-2 items-center">
            <div>
              {" "}
              <NavLink to={getProfileLink()}>
                <img src={img} alt="profile" className="w-10 cursor-pointer" />
              </NavLink>
            </div>

            <div className="text-white">
              <p className="text-xs">Profile</p>
              <p className="text-sm">RobertFox001</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <img src={cart} alt="cart" className="w-[35px] cursor-pointer" />
            <NavLink to={getTopUpLink()}>
              <div className="flex flex-col cursor-pointer">
                <p className="text-lg font-medium text-white">User Credit</p>
                <p className="bg-[#3D5EDB] p-1 text-sm text-white items-center text-center">
                  $ 120.00
                </p>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center md:flex lg:hidden gap-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:block lg:hidden mt-4 bg-[#2C4A84] p-4 rounded-md">
          <p className="text-white">Ship Now</p>
          <p className="text-white">About Us</p>
          <p className="text-white">Contact Us</p>
          <p className="text-white">Guide</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
