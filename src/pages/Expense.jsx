import { useState } from "react";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (item && amount) {
      setExpenses([...expenses, { item, amount: Number(amount) }]);
      setItem("");
      setAmount("");
    }
  };

  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Expense</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <button
          onClick={addExpense}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <h3 className="text-lg font-semibold">Total Expense: ₹{totalExpense}</h3>

      <ul className="mt-4">
        {expenses.map((exp, i) => (
          <li key={i} className="border-b py-2 flex justify-between">
            <span>{exp.item}</span>
            <span>₹{exp.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expense;
