import React, { useEffect, useState } from 'react';
import { getExpenses, getIncome } from '../utils/localStorageUtils';


export default function DashboardPage() {
const [totalIncome, setTotalIncome] = useState(0);
const [totalExpense, setTotalExpense] = useState(0);


useEffect(()=>{
const income = getIncome().reduce((a,b)=>a+b.amount,0);
const expense = getExpenses().reduce((a,b)=>a+b.amount,0);
setTotalIncome(income);
setTotalExpense(expense);
}, []);


const balance = totalIncome - totalExpense;


return (
<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
<div className="bg-green-100 p-6 rounded-lg text-center">
<h3 className="text-lg font-semibold">Total Income</h3>
<p className="text-2xl font-bold text-green-700">₹{totalIncome}</p>
</div>
<div className="bg-red-100 p-6 rounded-lg text-center">
<h3 className="text-lg font-semibold">Total Expense</h3>
<p className="text-2xl font-bold text-red-700">₹{totalExpense}</p>
</div>
<div className="bg-blue-100 p-6 rounded-lg text-center">
<h3 className="text-lg font-semibold">Balance</h3>
<p className="text-2xl font-bold text-blue-700">₹{balance}</p>
</div>
</div>
);
}
