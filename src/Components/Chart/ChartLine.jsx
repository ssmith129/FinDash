import React, { useState, useEffect, Fragment } from "react";
import dynamic from "next/dynamic";

// Menggunakan dynamic import untuk Chart
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartLine = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "",
        data: [10000, 41000, 35000, 51000, 49000, 62000, 69000, 91000, 148000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
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
      colors: ["#007AFF"],
      markers: {
        colors: "#1F2C37", // Default color
      },
      grid: {
        show: true,
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
            colors: theme === false ? "#1F2C37" : "#355fe5", // Adjust marker color based on theme
          },
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
      <div className="chartLine">
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>
    </Fragment>
  );
};

export default ChartLine;
