import { useState } from "react";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");

  const addIncome = () => {
    if (amount && source) {
      setIncomes([...incomes, { amount: Number(amount), source }]);
      setAmount("");
      setSource("");
    }
  };

  const totalIncome = incomes.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Income</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
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
          onClick={addIncome}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <h3 className="text-lg font-semibold">Total Income: ₹{totalIncome}</h3>

      <ul className="mt-4">
        {incomes.map((inc, i) => (
          <li key={i} className="border-b py-2 flex justify-between">
            <span>{inc.source}</span>
            <span>₹{inc.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Income;
