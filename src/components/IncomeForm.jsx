import React, { useState, useEffect } from "react";
import { saveIncome } from "../utils/localStorageUtils";

export default function IncomeForm({ onAdd, editingItem, onUpdate }) {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("Salary");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (editingItem) {
      setAmount(editingItem.amount);
      setSource(editingItem.source);
      setDate(editingItem.date);
      setNote(editingItem.note);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const income = {
      id: editingItem ? editingItem.id : Date.now(), 
      amount: parseFloat(amount),
      source,
      date,
      note,
    };

    if (editingItem) {
      onUpdate(income); 
      saveIncome(income); 
    } else {
      saveIncome(income); 
      onAdd(income);      
    }

    // Reset form
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
        {editingItem ? "Update Income" : "Add Income"} {/* ⭐ Button text changes */}
      </button>
    </form>
  );
}
