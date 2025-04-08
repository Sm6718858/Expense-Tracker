import React from "react";
import EXPENSE_BANNER from "../../assets/images/expense_banner.jpg";

import { LuTrendingUpDown } from "react-icons/lu";
function AuthLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vm] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[60vw] h-screen bg-sky-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-sky-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-amber-400 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-sky-600 absolute -bottom-7 -left-5" />

        <div className="gird grid-cols-1 z-20 relative">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        <img
          src={EXPENSE_BANNER}
          className="w-70 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 rounded-xl"
        />
      </div>
    </div>
  );
}

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl showdow-md shadow-sky-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl `}
      >
        {icon}
      </div>

      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">{value}</span>
      </div>
    </div>
  );
};
