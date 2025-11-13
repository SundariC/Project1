import React, { useState, useEffect } from 'react';
import IncomeForm from '../components/IncomeForm';
import ExpenseList from '../components/ExpenseList';
import { getIncome, deleteIncome } from '../utils/localStorageUtils';


export default function IncomePage() {
const [income, setIncome] = useState([]);
useEffect(()=>{ setIncome(getIncome()); }, []);


const handleAdd = (inc) => setIncome([...income, inc]);
const handleDelete = (id) => {
deleteIncome(id);
setIncome(income.filter(e=>e.id!==id));
};


return (
<div className="max-w-xl mx-auto">
<IncomeForm onAdd={handleAdd} />
<ExpenseList data={income} onDelete={handleDelete} />
</div>
);
}