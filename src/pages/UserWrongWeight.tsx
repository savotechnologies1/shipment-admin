import React, { useState } from "react";
import img from "../assets/anomalies.png";
import OrderSummarty from "../components/OrderSummary";

const UserWrongWeight = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="p-4">
      <div className="flex  items-center gap-2 ">
        <img src={img} alt="" />
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">
            Anomalies{" "}
          </h1>
          <p className="font-bold">Weight / Volume</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 p-6  sm:px-40 ">
        {/* Left Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full sm:w-2/3">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">#</td>
                <td className="px-4 py-6">-</td>
                <td>22345</td>
              </tr>
              <tr>
                <td className="font-bold">Recipient</td>
                <td className="px-4">-</td>
                <td>
                  2118 Thornridge Cir.
                  <br />
                  Syracuse, Connecticut 35624
                </td>
              </tr>
              <tr>
                <td className="font-bold">Anomaly</td>
                <td className="px-4 py-6">-</td>
                <td>Discrepancy Volume</td>
              </tr>
              <tr>
                <td className="font-bold">Declared Weight Class</td>
                <td className="px-4 py-6">-</td>
                <td>12,3</td>
              </tr>
              <tr>
                <td className="font-bold">Detected Weight Class</td>
                <td className="px-4 py-6">-</td>
                <td>12,3</td>
              </tr>
              <tr>
                <td className="font-bold">Declared PV/ Volume</td>
                <td className="px-4 py-6">-</td>
                <td>
                  24,6 PV
                  <br />
                  0,098 mc3
                </td>
              </tr>
              <tr>
                <td className="font-bold">Detected PV/ Volume</td>
                <td className="px-4 py-6">-</td>
                <td>
                  27,6 PV
                  <br />
                  0,098 mc3
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full sm:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">Resolve</h2>
            <p>Will Initiate a Stripe Paypal Payment</p>
          </div>
          <button
            onClick={() => setIsClicked(true)}
            className="bg-[#213C70] text-white py-3 rounded-xl text-2xl font-bold w-full"
          >
            $360
          </button>
          <OrderSummarty
            isClick={isClicked}
            onClose={()=> setIsClicked(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserWrongWeight;
