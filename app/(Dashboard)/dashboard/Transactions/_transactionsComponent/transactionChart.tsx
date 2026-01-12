"use client";

import React from "react";
import Chart from "react-google-charts";

export const data = [
  ["Element", "Transactions", { role: "style" }],
  ["Success", 8.94, "#b87333"], // RGB value
  ["Failure", 10.49, "silver"], // English color name
  ["Bill Payments", 19.3, "gold"],
  ["Mobile Recharges", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export function TransactionChart() {
  return <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />;
}
