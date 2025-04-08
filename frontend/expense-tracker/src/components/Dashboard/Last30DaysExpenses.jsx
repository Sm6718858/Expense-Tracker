import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomeBarChart from "../Charts/CustomeBarChart";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    console.log("Chart Data (Last 30 Days):", result);
    setChartData(result);
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 30 Days Expense</h5>
      </div>

      {/* Render chart only if there is data */}
      {chartData.length > 0 && <CustomeBarChart data={chartData} />}
    </div>
  );
};

export default Last30DaysExpenses;
