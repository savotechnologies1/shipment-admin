import React, { useState } from "react";
import data from "../../components/Data/adminCashOnData";

const AdminCashOnList = () => {
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
    <div className="py-4 bg-white rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr className="border-b bg-[#EDEDFF]">
              {[
                "#", "Recipient", "Tracking No.", "Amount COD", 
                "Shipment Status", "Beneficiary Bank Account", "Payment Status"
              ].map((heading, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-sm sm:text-base font-medium"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="text-center">
                {[
                  item.orderId,
                  item.recipient,
                  item.tracking_no,
                  item.amount,
                  item.status,
                  item.beneficiary_bank,
                ].map((value, idx) => (
                  <td key={idx} className="px-2 py-4 text-sm sm:text-base">
                    {value}
                  </td>
                ))}

                {/* Payment Status with Icon */}
                <td className="px-2 py-4 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-2">
                    <img src={item.paid} alt="Payment Status" className="" />
                    <p className="font-bold">Paid</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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

export default AdminCashOnList;
