import React, { useEffect, useState } from "react";
import { getExpenses, getIncome } from "../utils/localStorageUtils";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const income = getIncome().reduce((a, b) => a + b.amount, 0);
    const expense = getExpenses().reduce((a, b) => a + b.amount, 0);
    setTotalIncome(income);
    setTotalExpense(expense);
  }, []);

  const balance = totalIncome - totalExpense;

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
      <div className="bg-green-100 shadow-lg shadow-green-800 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold">Total Income</h3>
        <p className="text-2xl font-bold text-green-700">₹{totalIncome}</p>
      </div>
      <div className="bg-orange-100 shadow-lg shadow-orange-800 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold">Total Expense</h3>
        <p className="text-2xl font-bold text-orange-700">₹{totalExpense}</p>
      </div>
      <div className="bg-blue-100 shadow-lg shadow-blue-800 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold">Balance</h3>
        <p className="text-2xl font-bold text-blue-700">₹{balance}</p>
      </div>
      <div className="md:col-span-3 flex justify-center mt-6">
        <button className="border text-white px-4 py-2 rounded shadow-lg shadow-orange-500 hover:bg-orange-200 hover:text-black">
          <Link to="/expenses">Add your Expenses</Link>
        </button>
        <button className="border text-white px-4 py-2 rounded ml-4 shadow-lg shadow-green-500 hover:bg-green-200 hover:text-black">
          <Link to="/income">Add your Income</Link>
        </button>
        
      </div>
    </div>
  );
}
