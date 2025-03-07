import React, { useState } from "react";
import data from "./Data/anomaliesData";
import client_icon from "../assets/client.png";
import date_icon from "../assets/date.png";
import status_icon from "../assets/status.png";
import country_icon from "../assets/country.png";
import download from "../assets/downloadd.png";
import { NavLink } from "react-router-dom";

const AnomaliesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className=" py- bg-white rounded-lg">
      <div className="overflow-x-auto py-">
        <table className="w-full  bg-white">
          <thead>
            <tr className="border-b bg-[#EDEDFF]">
              <th className="px-4 py-3 text-left text-[000] text-lg font-medium">
                <div className="flex gap-4 items-center">
                  <p> #</p>
                </div>
              </th>

              <th className="px-4 py-3 text-left text-[000] text-lg font-medium">
                <div className="flex gap-4 items-center">
                  <p>Recipient </p>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-[000]  text-lgfont-medium">
                <div className="flex gap-4 items-center">
                  <p>Anomaly </p>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-[000]  text-lg font-medium">
                <p> Declared Weight Class</p>
              </th>
              <th className="px-4 py-3 text-left text-[000] text-lg font-medium">
                <p> Detected Weight Class </p>
              </th>

              <th className="px-4 py-3 text-left text-[000] text-lg font-medium">
                <p> Declared PV/ Volume </p>
              </th>
              <th className="px-4 py-3 text-left text-[000]  text-lg font-medium">
                <p> Detected PV/ Volume </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className=" text-center">
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <p>
                      <input type="checkbox" />
                    </p>
                    <p className="text-sm sm:text-base font- text-[#000]">
                      {item.orderId}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm sm:text-base  text-[#000]">
                  {item.recipient}
                </td>
                <td className="px-4 py-4 text-sm sm:text-base text-[#000]">
                  {item.Anomaly === "Discrepancy Volume" ||
                  item.Anomaly === "Discrepancy Weight" ? (
                    <NavLink to="/dashboard/user-wrong-weight">
                      <div className="flex flex-col items-center">
                        <img src={item.storage} alt="" />
                        {item.Anomaly}
                      </div>
                    </NavLink>
                  ) : item.Anomaly === "Undelivered" ? (
                    <NavLink to="/dashboard/user-undelivered">
                      <div className="flex flex-col items-center">
                        <img src={item.storage} alt="" />
                        {item.Anomaly}
                      </div>
                    </NavLink>
                  ) : (
                    <div className="flex flex-col items-center">
                      <img src={item.storage} alt="" />
                      {item.Anomaly}
                    </div>
                  )}
                </td>

                <td className="px-4 py-4">{item.declaredWeight}</td>
                <td className="px-4 py-4 text-sm sm:text-base  text-[#000]">
                  {item.detectedWeight}
                </td>
                <td className="px-4 py-4 text-sm sm:text-base  text-[#000]">
                  <div className="flex flex-col text-center">
                    <p> {item.declaredPv}</p>
                    <p> {item.declaredVolume}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm sm:text-base  text-[#000]">
                  <div className="flex flex-col items-center justify-center">
                    {" "}
                    <p className="">{item.detectedPv}</p>
                    <p className="">{item.detectedVolume}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 p-4 border-t">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-black rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-2 rounded font-semibold ${
                currentPage === i + 1 ? "bg-[#EDEDFF] " : "bg-transparent"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnomaliesList;
