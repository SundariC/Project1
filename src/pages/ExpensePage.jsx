import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { getExpenses, saveExpense, deleteExpense, updateExpense } from "../utils/localStorageUtils";
import Alert from "../components/Alert";

export default function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [alert, setAlert] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const handleAdd = (exp) => {
    setExpenses([...expenses, exp]);
    setAlert({ type: "success", message: "Expense added successfully!" });
    setTimeout(() => setAlert(null), 2000);
  };
  const handleDelete = (id) => {
    deleteExpense(id);
    setExpenses(expenses.filter((e) => e.id !== id));
    setAlert({ type: "error", message: "Expense deleted." });
    setTimeout(() => setAlert(null), 2000);
  };
  const handleUpdate = (updated) => {
    updateExpense(updated);
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
    setEditingItem(null); // form reset
  };

  return (
    <div className="flex justify-between gap-4 max-w-5xl mx-auto bg-orange-300 p-6 rounded-lg shadow-md shadow-orange-600">
      {alert && 
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1/3">
      <Alert type={alert.type} message={alert.message} /></div>}
      <ExpenseForm onAdd={handleAdd} editingItem={editingItem} onUpdate={handleUpdate} />
      <ExpenseList data={expenses} onDelete={handleDelete} onEdit={(item) => setEditingItem(item)} />
    </div>
  );
}
