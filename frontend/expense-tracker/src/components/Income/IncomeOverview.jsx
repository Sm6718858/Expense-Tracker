import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomeBarChart from "../Charts/CustomeBarChart";

const IncomeOverview = ({ transactions, onaAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const reuslt = prepareIncomeBarChartData(transactions);

    setChartData(reuslt);
    return () => {};
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button className="add-btn" onClick={onaAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      <div className="mt-10">
        <CustomeBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
