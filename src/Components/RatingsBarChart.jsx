import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingsBarChart = ({ app }) => {
  if (!app || !app.ratings) {
    return <p>No rating data available.</p>;
  }

 
  const chartData = [...app.ratings]
    .sort((a, b) => Number(b.name) - Number(a.name))
    .map((r) => ({
      name: r.name,
      value: r.count,
    }));

  return (
    <div className="w-full h-64 md:h-80">
      <h2 className="font-semibold mb-2 text-2xl">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Bar
            dataKey="value"
            fill="#ff8c00"
            barSize={20}
            radius={[5, 5, 5, 5]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsBarChart;
