import React, { useState } from "react";
import img from "../assets/anomalies.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const UserUndelivered = () => {

    const [selectedTab, setSelectedTab] = useState("same");
  return (
    <div className="p-4">
      <div className="flex  items-center gap-2 ">
        <img src={img} alt="" />
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">Anomalies </h1>
          <p className="font-bold">Undelivered</p>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row gap-6 p-6  px-4 ">
      {/* Left Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full sm:w-[40%] ">
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
                2118 Thornridge Cir.<br />
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
                24,6 PV<br />
                0,098 mc3
              </td>
            </tr>
            <tr>
              <td className="font-bold">Detected PV/ Volume</td>
              <td className="px-4 py-6">-</td>
              <td>
                27,6 PV<br />
                0,098 mc3
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full  flex flex-col justify-between sm:w-[60%]">
      <Tabs defaultValue="same" className="w-full">
        {/* Tab Buttons */}
        <TabsList className="flex gap-2p-1 rounded-lg justify-between">
        <TabsTrigger value="same" className="data-[state=active]:bg-[#213C70] data-[state=active]:text-white px-4 py-2 rounded-md">
          Resend to same Address
        </TabsTrigger>
        <TabsTrigger value="another" className="data-[state=active]:bg-[#213C70] data-[state=active]:text-white px-4 py-2 rounded-md">
          Send to Another Address
        </TabsTrigger>
        <TabsTrigger value="back" className="data-[state=active]:bg-[#213C70] data-[state=active]:text-white px-4 py-2 rounded-md">
          Send Back to Sender
        </TabsTrigger>
      </TabsList>
        {/* Tab Content */}
        <TabsContent value="same">
          <div className="mt-4 flex flex-col gap-6">
            <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold"placeholder="Enter Sender Address" />
            <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Block/Building" />
            <div className="flex gap-2">
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Floor" />
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Unit" />
            </div>
            <div className="flex gap-2">
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Sender Full Name" />
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Sender Phone Number" />
            </div>
            <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Enter E-mail Address" />
            <button className="mt-4 bg-[#213C70] text-white py-4 rounded-md w-full">
              Resend to same Address
            </button>
          </div>
        </TabsContent>

        <TabsContent value="another">
        <div className="mt-4 flex flex-col gap-6">
            <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold"placeholder="Enter Sender Address" />
            <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Block/Building" />
            <div className="flex gap-2">
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Floor" />
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Unit" />
            </div>
            <div className="flex gap-2">
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Sender Full Name" />
              <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Sender Phone Number" />
            </div>
            <input className="border p-2 w-full rounded-md bg-[#F9F9F9] placeholder-black font-semibold" placeholder="Enter E-mail Address" />
            <button className="mt-4 bg-[#213C70] text-white py-4 rounded-md w-full">
              Resend to same Address
            </button>
          </div>
        </TabsContent>

        <TabsContent value="back">
       <div className="mt-28 flex  flex-col justify-center items-center h-full text-center ">
      
        <h1 className=" text-2xl font-bold">Send Back to Sender</h1>
        <p className="font-semibold  mt-4">Shipment Cost Apply</p>

        <button className="mt-10 text-white bg-[#213C70] w-60 py-2 rounded-md">Pay $ 8,70</button>
        <p className="mt-2 text-lg">Will Initiate a Stripe Paypal Payment</p>
      
       </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
    </div>
  );
};

export default UserUndelivered;
