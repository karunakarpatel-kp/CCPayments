"use client";

import Chart from "react-google-charts";

export function PieChart() {
  const data = [
    ["Task", "Hours per Day"],
    ["Prepaid Bills", 9],
    ["Electricity", 2],
    ["Water Bill", 2],
    ["DTH", 2],
    ["Wifi Bill", 7],
  ];

  const options = {
    title: "My Daily Transactions",
  };
  return <Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"400px"} />;
}
