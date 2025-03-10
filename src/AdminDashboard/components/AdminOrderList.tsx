import React, { useState } from "react";
import data from "../../components/Data/AdminOrderData";
import download from "../../assets/downloadd.png";
import { NavLink } from "react-router-dom";

const AdminOrderList = () => {
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
    <div className="py-4 bg-white rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr className="border-b bg-[#EDEDFF]">
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <div className="flex gap-2 items-center">
                  <p>#</p>
                </div>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <div className="flex gap-2 items-center">
                  <p>Date</p>
                </div>
              </th>

              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <div className="flex gap-2 items-center">
                  <img src={download} alt="Download" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <div className="flex gap-2 items-center">
                  <p>Service Type</p>
                </div>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Recipient</p>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Tracking No.</p>
              </th>

              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Additional Services</p>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Anomalies</p>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Price</p>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Current State</p>
              </th>
              <th className="px-2 py-3 text-left text-sm sm:text-base font-medium">
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="px-2 py-4 text-sm sm:text-base">{item.orderId}</td>
                <td className="px-2 py-4 text-sm sm:text-base">
                  <div className="flex flex-col gap-2">
                    <p>{item.date}</p>
                    <p className="text-xs sm:text-sm">{item.time}</p>
                  </div>
                </td>

                <td className="px-2 py-4 text-sm sm:text-base">
                  <img src={item.pdf} alt="Download PDF" />
                </td>

                <td className="px-2 py-4 text-sm sm:text-base">{item.service}</td>
                <td className="px-2 py-4 text-sm sm:text-base">{item.recipient}</td>
                <td className="px-2 py-4 text-sm sm:text-base">{item.tracking_no}</td>
                <td className="px-2 py-4 text-sm sm:text-base">
                  <div>
                    <p>{item.service}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{item.addAmmount}</p>
                  </div>
                </td>
                <td className="px-2 py-4 text-sm sm:text-base">
                  <div className="flex flex-col items-center">
                    <img src={item.anomalies} alt="Anomaly" />
                    <span className="text-xs sm:text-sm">{item.storage}</span>
                  </div>
                </td>
                <td className="px-2 py-4 text-sm sm:text-base">${item.price}</td>
                <td className="px-2 py-4 text-sm sm:text-base">{item.currentState}</td>
                <td className="px-2 py-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <img src={item.truck} alt="Truck" />
                    <img src={item.support} alt="Support" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 p-4 border-t">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-black rounded disabled:opacity-50 text-sm sm:text-base"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-2 rounded font-semibold text-sm sm:text-base ${
                currentPage === i + 1 ? "bg-[#EDEDFF]" : "bg-transparent"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-black rounded disabled:opacity-50 text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminOrderList;
