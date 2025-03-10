import React, { useState } from "react";
import data from "./Data/CashOnListData";

const CashOnList = () => {
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
        <table className="w-full bg-white border-collapse text-xs md:text-sm">
          <thead>
            <tr className="border-b bg-[#EDEDFF] text-xs md:text-sm lg:text-base">
              <th className="px-3 py-2 text-left">#</th>
              <th className="px-3 py-2 text-left">Recipient</th>
              <th className="px-3 py-2 text-left">Tracking No.</th>
              <th className="px-3 py-2 text-left">Amount COD</th>
              <th className="px-3 py-2 text-left">Shipment Status</th>
              <th className="px-3 py-2 text-left">Beneficiary Bank Account</th>
              <th className="px-3 py-2 text-left">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="px-3 py-2 lg:py-4">{item.orderId}</td>
                <td className="px-3 py-2 lg:py-4">{item.recipient}</td>
                <td className="px-3 py-2 lg:py-4">{item.tracking_no}</td>
                <td className="px-3 py-2 lg:py-4">{item.amount}</td>
                <td className="px-3 py-2 lg:py-4">{item.status}</td>
                <td className="px-3 py-2 lg:py-4">{item.beneficiary_bank}</td>
                <td className="px-3 py-2 flex items-center justify-center gap-2 lg:py-4">
                  <img src={item.paid} alt="Payment Status" className="" />
                  <p className="font-bold">Paid</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default CashOnList;