import React, { useState, Fragment } from "react";
import dynamic from "next/dynamic";

// Menggunakan dynamic import untuk Chart
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartDonut = (props) => {
  const [data, setData] = useState({
    series: [350, 200, 500],
    options: {
      chart: {
        width: 220,
        type: "donut",
      },
      legend: {
        show: false,
      },
      fill: {
        colors: ["#007AFF", "#007bff80", "#007bff1a"],
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 1,
          expandOnClick: false,
          donut: {
            size: "80%", // Membuat donut lebih tipis
          },
        },
      },
      stroke: {
        width: 2, // Ketebalan stroke
        lineCap: "round", // Memberikan efek rounded pada ujung stroke
        colors: ["#fff"], // Warna stroke
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 220,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 170,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  const price = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  return (
    <Fragment>
      <div className="relative">
        <div className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          64%
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="donut"
          width={220}
        />
      </div>
    </Fragment>
  );
};

export default ChartDonut;