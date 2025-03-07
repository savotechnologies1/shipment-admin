import React from "react";
import data from "./Data/topSuppliesData";
import ReactApexChart from "react-apexcharts";

const Overview = () => {
  const [state, setState] = React.useState({
    series: [44, 55, 67],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas"],
    },
  });

  return (
    <div className=" py-6">
      <h1 className="text-xl font-bold px-4 ">Overview</h1>

      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={350}
        />
      </div>
      
      <div id="html-dist"></div>
    </div>
  );
};

export default Overview;
