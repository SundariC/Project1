import React, { useState } from 'react';
import { saveExpense } from '../utils/localStorageUtils';


export default function ExpenseForm({ onAdd }) {
const [amount, setAmount] = useState('');
const [category, setCategory] = useState('Food');
const [date, setDate] = useState('');
const [note, setNote] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
const expense = { id: Date.now(), amount: parseFloat(amount), category, date, note };
saveExpense(expense);
onAdd(expense);
setAmount('');
setCategory('Food');
setDate('');
setNote('');
};


return (
<form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md space-y-3">
<div className="flex flex-col">
<label>Amount:</label>
<input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className="border p-2 rounded" required />
</div>
<div className="flex flex-col">
<label>Category:</label>
<select value={category} onChange={(e)=>setCategory(e.target.value)} className="border p-2 rounded">
<option>Food</option>
<option>Travel</option>
<option>Bills</option>
<option>Shopping</option>
<option>Others</option>
</select>
</div>
<div className="flex flex-col">
<label>Date:</label>
<input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="border p-2 rounded" required />
</div>
<div className="flex flex-col">
<label>Note:</label>
<input type="text" value={note} onChange={(e)=>setNote(e.target.value)} className="border p-2 rounded" />
</div>
<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add Expense</button>
</form>
);
}