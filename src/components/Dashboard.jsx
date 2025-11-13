// src/components/Dashboard.jsx
import React from "react";

const Dashboard = ({ income, expenses }) => {
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);
  const balance = totalIncome - totalExpense;

  const categoryTotals = expenses.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
        Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-100 p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-medium text-green-800">Total Income</h3>
          <p className="text-2xl font-bold mt-2">₹{totalIncome.toFixed(2)}</p>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-medium text-red-800">Total Expense</h3>
          <p className="text-2xl font-bold mt-2">₹{totalExpense.toFixed(2)}</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-medium text-blue-800">Balance</h3>
          <p className="text-2xl font-bold mt-2">₹{balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4 text-indigo-700">
          Category-wise Expenses
        </h3>
        {Object.keys(categoryTotals).length === 0 ? (
          <p className="text-gray-500">No expenses yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {Object.entries(categoryTotals).map(([category, total]) => (
              <li
                key={category}
                className="flex justify-between py-2 text-gray-700"
              >
                <span className="font-medium">{category}</span>
                <span className="font-semibold">₹{total.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
