import React, { useState } from "react";
import { saveIncome } from "../utils/localStorageUtils";

export default function IncomeForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("Salary");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const income = {
      id: Date.now(),
      amount: parseFloat(amount),
      source,
      date,
      note,
    };
    saveIncome(income);
    onAdd(income);
    setAmount("");
    setSource("Salary");
    setDate("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-green-200 w-full p-4 rounded-lg shadow-md space-y-3"
    >
      <div className="flex flex-col">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="outline-none bg-green-300  p-2 rounded"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Source:</label>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="outline-none bg-green-300 p-2 rounded"
        >
          <option>Salary</option>
          <option>Freelance</option>
          <option>Gift</option>
          <option>Others</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none bg-green-300 p-2 rounded"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Note:</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="outline-none bg-green-300 p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 shadow-md shadow-green-900 text-white px-4 py-2 rounded w-full"
      >
        Add Income
      </button>
    </form>
  );
}
