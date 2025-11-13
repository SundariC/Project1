import React, { useState, useEffect } from "react";
import IncomeForm from "../components/IncomeForm";
import ExpenseList from "../components/ExpenseList";
import { getIncome, deleteIncome } from "../utils/localStorageUtils";
import Alert from "../components/Alert";

export default function IncomePage() {
  const [income, setIncome] = useState([]);
  const [alert, setAlert] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  

  useEffect(() => {
    setIncome(getIncome());
  }, []);

  const handleUpdate = (updated) => {
  setIncome(income.map((e) => (e.id === updated.id ? updated : e)));
  setEditingItem(null); 
};

  const handleAdd = (inc) => { 
    setIncome([...income, inc]);
    setAlert({ type: "success", message: "Income added successfully!" });
    setTimeout(() => setAlert(null), 2000);
  };
  const handleDelete = (id) => {
    deleteIncome(id);
    setIncome(income.filter((e) => e.id !== id));
    setAlert({ type: "error", message: "Income deleted." });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <div className="flex justify-between gap-4 max-w-5xl mx-auto bg-green-300 p-6 rounded-lg shadow-md shadow-green-600">
      {alert && 
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1/3">
      <Alert type={alert.type} message={alert.message} /></div>}
      <IncomeForm onAdd={handleAdd} editingItem={editingItem} onUpdate={handleUpdate} />
      <ExpenseList data={income} onDelete={handleDelete} onEdit={(item) => setEditingItem(item)} />
    </div>
  );
}

