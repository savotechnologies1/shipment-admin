import React, { useState } from "react";
import data from "../../components/Data/dailyOrderData";
import downloadIcon from "../../assets/downloadd.png";

const DailyOrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Table Wrapper for Responsive Scrolling */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="border-b bg-[#EDEDFF] text-left">
              {[
                "#", "Date", "Download", "Service Type", "Recipient", "Tracking No.", 
                "Additional Services", "Anomalies", "Price", "Current State", "Action"
              ].map((header, index) => (
                <th key={index} className="px-3 py-2 text-sm font-medium">
                  {header === "Download" ? <img src={downloadIcon} alt="Download" className="" /> : header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="border-b text-sm">
                <td className="px-3 py-2">{item.orderId}</td>
                <td className="px-3 py-2">{item.date} <span className="text-xs text-gray-500">{item.time}</span></td>
                <td className="px-3 py-2">
                  <img src={item.pdf} alt="PDF Icon" className="" />
                </td>
                <td className="px-3 py-2">{item.service}</td>
                <td className="px-3 py-2">{item.recipient}</td>
                <td className="px-3 py-2">{item.tracking_no}</td>
                <td className="px-3 py-2">
                  <p>{item.service}</p>
                  <p className="text-xs text-gray-500">{item.addAmmount}</p>
                </td>
                <td className="px-3 py-2 flex items-center gap-2">
                  <img src={item.anomalies} alt="Anomaly" className="" />
                  <span>{item.storage}</span>
                </td>
                <td className="px-3 py-2">${item.price}</td>
                <td className="px-3 py-2">{item.currentState}</td>
                <td className="px-3 py-2 flex gap-2">
                  <img src={item.truck} alt="Truck" className="" />
                  <img src={item.support} alt="Support" className="" />
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

export default DailyOrderList;
