"use client";

import ApexCharts from "apexcharts";
import React from "react";

// window.Apex = {
//   chart: {
//     foreColor: '#ccc',
//     toolbar: {
//       show: false
//     },
//   },
//   stroke: {
//     width: 3
//   },
//   dataLabels: {
//     enabled: false
//   },
//   tooltip: {
//     theme: 'dark'
//   },
//   grid: {
//     borderColor: "#535A6C",
//     xaxis: {
//       lines: {
//         show: true
//       }
//     }
//   }
// };

let spark1 = {
  chart: {
    id: "spark1",
    type: "line",
    height: 70,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0,
    },
  },
  series: [
    {
      data: [25, 66, 41, 59, 25, 44],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
    colors: ["#6E00FF"],
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 0,
    },
  },
  colors: ["#03D2DA"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};
let spark2 = {
  chart: {
    id: "spark2",
    type: "line",
    height: 70,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0,
    },
  },
  series: [
    {
      data: [25, 66, 41, 59, 25, 44],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
    colors: ["#6E00FF"],
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 0,
    },
  },
  colors: ["#03D2DA"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};
let options = {
  series: [
    {
      data: [1800, 3800, 2300, 5300, 4800, 6800],
    },
  ],
  chart: {
    type: "bar",
    height: 270,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  colors: ["#6E00FF"],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["May", "April", "Julay", "October", "June", "June"],
  },
};

export const useChart = () => {
  React.useEffect(() => {
    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#chart"), options).render();
  }, []);
};
