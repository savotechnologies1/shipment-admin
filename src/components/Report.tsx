import React from "react";
import data from "./Data/newEmpData";
import arrow from "../assets/right_arrow.png";
import ReactApexChart from "react-apexcharts";

const Reports = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Total Vacant",
        data: [31, 40, 28, 51, 42, 109, 100, 96, 59, 68, 67, 79],
        color: "#FFAB00"
      },
      {
        name: "Total Booked",
        data: [11, 32, 45, 32, 34, 52, 41, 59, 57, 78, 57, 29],
        color: "#00A76F"
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "mm/dd/yyyy",
        categories: [
          "jan ",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ],
      },
      tooltip: {
        x: {
          format: "mm",
        },
      },
    },
  });
  return (
    <div className=" py-6 px-4">
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-lg font-bold ">Yearly Booked Report</h1>
          <p className="text-gray-400">(+43%) than last year</p>
        </div>
        <div>
        <div className="border p-2 rounded-md border-[#43B0F9] flex items-center gap-2">
            <select className="outline-none">
              <option value=""> 2023</option>
              <option value=""> 2024</option>
              <option value=""> 2025</option>
            </select>
          </div>
        </div>
      </div>

      <div id="chart ">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Reports;
