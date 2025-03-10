import React, { useState } from "react";
import data from "../../components/Data/earningsData";

const EarningList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
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
    <div className="bg-white rounded-lg shadow-md ">
      <div className="overflow-x-auto">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="border-b bg-[#EDEDFF] text-left text-sm sm:text-base ">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Creation Date</th>
              <th className="px-4 py-3">Price Category</th>
              <th className="px-4 py-3">Discount Code</th>
              <th className="px-4 py-3">Fee Earned</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="text-center border-b hover:bg-gray-100 transition">
                <td className="px-4 py-3">{item.orderId}</td>
                <td className="px-4 py-3 flex flex-col sm:flex-row sm:gap-2">
                  <span>{item.date}</span>
                  <span className="text-gray-500">{item.time}</span>
                </td>
                <td className="px-4 py-3">{item.price}</td>
                <td className="px-4 py-3">{item.discount}</td>
                <td className="px-4 py-3">{item.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 p-4 border-t gap-2 sm:gap-0">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-2 rounded font-semibold ${
                currentPage === i + 1 ? "bg-[#EDEDFF] font-bold" : "bg-transparent"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EarningList;
