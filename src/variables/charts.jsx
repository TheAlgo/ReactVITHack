const dashboardNASDAQChart = {
  data: {
    labels: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "100",
      "110",
      "120"
    ],
    datasets: [
      {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70, 10, 15, 10, 12, 20,],
        fill: false,
        borderColor: "cyan",
        backgroundColor: "transparent",
        pointBorderColor: "cyan",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

module.exports = {
  dashboardNASDAQChart
};
