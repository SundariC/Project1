import React, { useState, useEffect } from "react";
import { saveExpense } from "../utils/localStorageUtils";

export default function ExpenseForm({ onAdd, editingItem, onUpdate }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");


  useEffect(() => {
    if (editingItem) {
      setAmount(editingItem.amount);
      setCategory(editingItem.category);
      setDate(editingItem.date);
      setNote(editingItem.note);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: editingItem ? editingItem.id : Date.now(), 
      amount: parseFloat(amount),
      category,
      date,
      note,
    };

    if (editingItem) {
      onUpdate(expense); 
    } else {
      saveExpense(expense); 
      onAdd(expense);       
    }

    // Reset form
    setAmount("");
    setCategory("Food");
    setDate("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-orange-200 w-full p-4 rounded-lg shadow-md space-y-3"
    >
      <div className="flex flex-col">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="outline-none bg-orange-300 p-2 rounded"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="outline-none bg-orange-300 p-2 rounded"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none bg-orange-300 p-2 rounded"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Note:</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="outline-none bg-orange-300 p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-600 shadow-md shadow-orange-900 text-white px-4 py-2 rounded w-full"
      >
        {editingItem ? "Update Expense" : "Add Expense"} {/* ⭐ Change button text */}
      </button>
    </form>
  );
}
