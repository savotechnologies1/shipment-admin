import React, { useState, useContext } from "react";


import { NavLink } from "react-router-dom";
import { tabsContext } from "../components/Context/Context";
import { FaCircle } from "react-icons/fa";
import search_2 from "../assets/search_2.png";
import more from "../assets/more.png";
import edit from "../assets/edit.png";
import bin from "../assets/Bin.png";
import back from "../assets/back.png";
import next from "../assets/next.png";
import calender from "../assets/Calendar.png";
import data from "../components/Data/historyData";
import client from "../assets/client.png";
import status from "../assets/status_icon.png";
import country from "../assets/country_iocn.png";
import btn from "../assets/delete_btn.png";

const History = () => {
  const categorys = [
    { tab: "All ", text: "80" },
    { tab: "Pending ", text: "22" },
    { tab: "Completed ", text: "11" },
    { tab: "Cancelled ", text: "32" },
  ];
  const [activeTab, setActiveTab] = useState("All ");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleRows = data.slice(startIndex, startIndex + rowsPerPage);

  // const filterData =
  //   activeTab === "All "
  //     ? orderDelail
  //     : orderDelail.filter((data) => data.days === activeTab);

  const handleTabs = (value: string) => {
    setActiveTab(value);
  };
  const Active = useContext(tabsContext);

  console.log(activeTab);
  return (
    <div className="p-7 ">
      <div>
        <div className="flex  justify-between ">
          <div>
            {" "}
            <h1 className="font-bold text-[20px] md:text-[24px] text-black">
              Booked History
            </h1>
          </div>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <div className="flex gap-2 items-center ">
            <p
              className={`text-[16px] text-black`}
              onClick={() => Active("dashboardDetailes")}
            >
              <NavLink to={"/dashboardDetailes"}>Dashboard</NavLink>
            </p>
            <span>
              <FaCircle className="text-[6px] text-gray-500" />
            </span>
            <span className="text-[16px] hover:cursor-pointer">
              Warehouse Management
            </span>
            <span>
              <FaCircle className="text-[6px] text-gray-500" />
            </span>
            <span className="text-[16px] hover:cursor-pointer text-gray-500">
              History
            </span>
          </div>
        </div>
        <div className="rounded-md ">
          <div className="flex flex-col justify-between mt-6  bg-white rounded-t">
            <div className="flex sm:flex-row  gap-2 items-center px-4 justify-end mt-4">
              <div className="border p-2 rounded-md border-[#43B0F9] flex items-center gap-2">
                <img src={calender} alt="" />
                <select className="outline-none">
                  <option value="">Jan 2024</option>
                  <option value="">feb 2025</option>
                </select>
              </div>
              <div>
                <button className="bg-[#43B0F9] text-white p-2 rounded-md">
                  <NavLink to={"/dashboard/new-booking"}> Book Storage</NavLink>
                </button>
              </div>
            </div>
            <div className="flex gap-10 font-semibold  px-2   items-center hover:cursor-pointer border-b overflow-x-auto">
              {categorys.map((category) => (
                <div
                  key={category}
                  className={`${
                    activeTab === category.tab
                      ? "border-b-2 border-[#001A60] px-2 py-3  "
                      : "text-[#637381]"
                  }`}
                  onClick={() => handleTabs(category.tab)}
                >
                  <div className="flex gap-2">
                    {" "}
                    <p>{category.tab}</p>
                    <p
                      className={`px-2 py-1 rounded-lg text-sm font-medium ${
                        category.tab.trim() === "All"
                          ? "text-white bg-[#000]"
                          : category.tab.trim() === "Active"
                          ? "text-green-800 bg-green-100"
                          : category.tab.trim() === "Pending"
                          ? "text-[#B76E00] bg-[#FFAB0029]"
                          : category.tab.trim() === "Completed"
                          ? "text-green-800 bg-green-100"
                          : category.tab.trim() === "Cancelled"
                          ? "text-red-800 bg-red-100"
                          : "text-gray-800 bg-gray-100"
                      }`}
                    >
                      {category.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4  ">
              <div className="flex flex-col  xl:flex-row xl:items-center gap-4 p-4">
                {/*date*/}
                <div className="flex flex-col sm:flex-row gap-4">
                  {" "}
                  <div className="border rounded-md p-3">
                    <input className="" type="date" placeholder="Start date" />
                  </div>
                  <div className="border rounded-md p-3">
                    <input className="" type="date" placeholder="Start date" />
                  </div>
                </div>

                {/* Search Field */}
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 relative border p-3 rounded-md">
                    <input
                      type="text"
                      placeholder="Search customer or order number..."
                      className="w-full rounded-md border-gray-300  pl-6  text-sm md:text-base outline-none"
                    />

                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <img src={search_2} alt="" />
                    </div>
                  </div>

                  <div>
                    <img src={more} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/*filter*/}

            <div className="flex flex-col gap-2 p-4 text-gray-700">
              <span className="text-sm font-medium">
                8 <span className="font-base text-gray-500">RESULTS FOUND</span>
              </span>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex items-center gap-2 border border-dashed rounded-md px-3 py-1 text-sm">
                  <span className="font-medium">Status :</span>
                  <span className="bg-[#919EAB14] px-2 py-0.5 rounded-md flex items-center gap-1">
                    Keyword{" "}
                    <button className="text-gray-500 hover:text-black ">
                      &times;
                    </button>
                  </span>
                </div>

                <div className="flex items-center gap-2 border border-dashed rounded-md px-3 py-1 text-sm">
                  <span className="font-medium">Date :</span>
                  <span className="bg-[#919EAB14] px-2 py-0.5 rounded-md flex items-center gap-1">
                    Keyword{" "}
                    <button className="text-gray-500 hover:text-black">
                      &times;
                    </button>
                  </span>
                </div>

                <button className="flex items-center text-red-500 text-sm font-medium hover:underline">
                  <img src={btn} alt="" />
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white">
              <thead>
                <tr className="">
                  <th className="px-4 py-3 text-left font-medium">
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p>Order</p>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    <div className="flex items-center gap-2">
                      <img
                        className="
                      w-3"
                        src={client}
                        alt=""
                      />
                      <p> Client</p>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Date</th>
                  <th className="px-4 py-3 text-left font-medium">
                    <div className="flex items-center gap-2">
                      <img className="w-3" src={status} alt="" />
                      <p> Status</p>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    <div className="flex items-center gap-2">
                      <img className="w-3 " src={country} alt="" />
                      <p> Country</p>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Total</th>
                  <th className="px-4 py-3 text-left font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {visibleRows.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-dashed border-gray-200"
                  >
                    <td className="px-4 py-2 ">
                      <div className="flex gap-2">
                        <input type="checkbox" />
                        <p>{item.order}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm sm:text-base font-medium ">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-400">{item.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm sm:text-base font-medium ">
                      {item.date}
                    </td>
                    <td className="px-4 py-4 text-sm sm:text-base font-medium ">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "All"
                            ? "text-white bg-black"
                            : item.status === "Pending"
                            ? "text-[#B76E00] bg-yellow-100"
                            : item.status === "Deleted"
                            ? "text-[#B71D18] bg-[#FF563029]"
                            : item.status === "Success"
                            ? "text-green-800 bg-green-100"
                            : "text-gray-800 bg-gray-100"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm sm:text-base font-medium ">
                      {item.Country}
                    </td>
                    <td className="px-4 py-4">{item.total}</td>
                    <td className="px-4 py-4 flex gap-4">
                      <button className="text-blue-600 hover:underline py-4">
                        <img src={edit} alt="Edit" />
                      </button>
                      <button className="text-blue-600 hover:underline py-4">
                        <img src={bin} alt="More" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex  justify-end items-center  bg-white py-2">
              <p className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </p>

              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <img src={back} alt="" />
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2  rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300"
                }`}
              >
                <img src={next} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
