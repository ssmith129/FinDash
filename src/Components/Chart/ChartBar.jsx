import React, { useState, useEffect, Fragment } from "react";
import dynamic from "next/dynamic";

// Menggunakan dynamic import untuk Chart
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartBar = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "",
        data: [
          10000, 41000, 35000, 51000, 49000, 62000, 69000, 91000, 148000, 69000,
          91000, 148000,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 8, // Menambahkan border-radius pada bar
          columnWidth: "50%", // Mengatur lebar kolom
        },
      },
      events: {
        // Event listener untuk mouseover dan mouseout
        dataPointMouseEnter: (event, chartContext, config) => {
          const hoveredBar = document.querySelector(`#bar-${config.dataPointIndex}`);
          if (hoveredBar) {
            hoveredBar.classList.add("hovered-bar");
          }
        },
        dataPointMouseLeave: (event, chartContext, config) => {
          const hoveredBar = document.querySelector(`#bar-${config.dataPointIndex}`);
          if (hoveredBar) {
            hoveredBar.classList.remove("hovered-bar");
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
        lineCap: "round",
      },
      colors: ["#007bff14"],
      states: {
        hover: {
          filter: {
            type: "lighten", // Efek lighten saat hover
            value: 0.1, // Nilai pencerahan
          },
        },
        active: {
          filter: {
            type: "darken", // Efek darken saat bar aktif (diklik)
            value: 0.1, // Nilai penggelapan
          },
        },
      },
      markers: {
        colors: "#1F2C37", // Default color
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        // Grid lines for the chart background
      },
      xaxis: {
        labels: {
          style: {
            colors: "#9ca4ab",
          },
        },
        axisBorder: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        categories: [
          "Apr 12",
          "Apr 12",
          "Apr 14",
          "Apr 16",
          "Apr 16",
          "Apr 17",
          "Apr 17",
          "Apr 18",
          "Apr 19",
        ],
        grid: {
          // Set grid line color for X axis
          borderColor: "#E5E5E5", // Default X axis grid line color
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#9ca4ab",
          },
          formatter: (val) => {
            return price(val);
          },
        },
        tooltip: {
          enabled: false,
        },
        show: true,
        opposite: true,
        grid: {
          // Set grid line color for Y axis
          borderColor: "#E5E5E5", // Default Y axis grid line color
        },
      },
      tooltip: {
        shared: false,
        marker: {
          show: false,
        },
        x: {
          show: false,
        },
        y: {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w }
          ) {
            return formatCurrency(value);
          },
          title: {
            formatter: (seriesName) => "",
          },
        },
        position: "top",
      },
    },
  });

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2, // Always show 2 decimal places
      maximumFractionDigits: 2, // Maximum of 2 decimal places
    }).format(num); // Format number as USD currency
  };

  const price = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  // Update data options based on theme
  const updateTheme = () => {
    if (typeof window !== "undefined" && localStorage.getItem("darkMode")) {
      const theme = localStorage.getItem("darkMode");
      setData((prevData) => ({
        ...prevData,
        options: {
          ...prevData.options,
          markers: {
            colors: theme === false ? "#1F2C37" : "#007bff14", // Adjust marker color based on theme
          },
          colors: theme === "false" ? ["#007bff14"] : ["#007bff14"],
          grid: {
            ...prevData.options.grid,
            // Set borderColor for X and Y axes separately based on theme
            xaxis: {
              grid: {
                borderColor: theme === false ? "#E5E5E5" : "#FF0000", // Red for dark mode
              },
            },
            yaxis: {
              grid: {
                borderColor: theme === false ? "#E5E5E5" : "#FF0000", // Red for dark mode
              },
            },
          },
        },
      }));
    }
  };

  // Run updateTheme on initial mount
  useEffect(() => {
    updateTheme();

    // Listen for changes to localStorage
    const handleStorageChange = () => {
      updateTheme();
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Fragment>
      <div className="chartLine barHover">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
        <style jsx>{`
          .apexcharts-bar-area path {
            transition: fill 0.3s ease; /* Efek transisi warna */
          }
          .hovered-bar {
            fill: #007aff !important; /* Warna hover spesifik */
          }
        `}</style>
      </div>
    </Fragment>
  );
};

export default ChartBar;
