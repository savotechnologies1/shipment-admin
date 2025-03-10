import React, { useState } from "react";
import data from "./Data/shipmentListData";
import download from "../assets/downloadd.png";
import { NavLink } from "react-router-dom";

const ShipmentList = () => {
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
    <div className="bg-white rounded-lg ">
      <div className="overflow-x-auto">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="border-b bg-[#EDEDFF] text-xs md:text-sm lg:text-base">
              <th className="px-3 py-2 text-left">#</th>
              <th className="px-3 py-2 text-left">
                <img src={download} alt="Download" className="" />
              </th>
              <th className="px-3 py-2 text-left">Service Type</th>
              <th className="px-3 py-2 text-left">Recipient</th>
              <th className="px-3 py-2 text-left">Tracking No.</th>
              <th className="px-3 py-2 text-left">Additional Services</th>
              <th className="px-3 py-2 text-left">Anomalies</th>
              <th className="px-3 py-2 text-left">Price</th>
              <th className="px-3 py-2 text-left">Current State</th>
              <th className="px-3 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="text-center border-b text-xs md:text-sm">
                <td className="px-3 py-2">{item.orderId}</td>
                <td className="px-3 py-2">
                  <img src={item.pdf} alt="PDF" className="" />
                </td>
                <td className="px-3 py-2">{item.service}</td>
                <td className="px-3 py-2">{item.recipient}</td>
                <td className="px-3 py-2">{item.tracking_no}</td>
                <td className="px-3 py-2">
                  <p>{item.service}</p>
                  <p>{item.addAmmount}</p>
                </td>
                <td className="px-3 py-2 flex flex-col items-center">
                  <img src={item.anomalies} alt="Anomalies" className="w-5 " />
                  {item.storage}
                </td>
                <td className="px-3 py-2">{item.price}</td>
                <td className="px-3 py-2">{item.currentState}</td>
                <td className="px-3 py-2 flex justify-center gap-2">
                  <img src={item.truck} alt="Truck" className="w-5 h-5" />
                  <img src={item.support} alt="Support" className="w-5 h-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 p-4 border-t">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-black rounded disabled:opacity-50 text-xs md:text-sm"
        >
          Previous
        </button>

        <div className="flex flex-wrap justify-center space-x-1 my-2 sm:my-0">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-2 rounded text-xs md:text-sm ${
                currentPage === i + 1 ? "bg-[#213C70] text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-black rounded disabled:opacity-50 text-xs md:text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShipmentList;
