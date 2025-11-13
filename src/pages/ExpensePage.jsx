import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { getExpenses, deleteExpense } from '../utils/localStorageUtils';


export default function ExpensePage() {
const [expenses, setExpenses] = useState([]);


useEffect(()=>{ setExpenses(getExpenses()); }, []);


const handleAdd = (exp) => setExpenses([...expenses, exp]);
const handleDelete = (id) => {
deleteExpense(id);
setExpenses(expenses.filter(e=>e.id!==id));
};


return (
<div className="max-w-xl mx-auto">
<ExpenseForm onAdd={handleAdd} />
<ExpenseList data={expenses} onDelete={handleDelete} />
</div>
);
}