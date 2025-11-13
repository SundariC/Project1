
import React, { useState, useEffect } from 'react';
import Charts from '../components/Charts';
import { getExpenses, getIncome } from '../utils/localStorageUtils';


export default function ChartPage() {
const [income, setIncome] = useState([]);
const [expenses, setExpenses] = useState([]);


useEffect(()=>{
setIncome(getIncome());
setExpenses(getExpenses());
}, []);


return (
<div className="max-w-5xl mx-auto">
<Charts incomeData={income} expenseData={expenses} />
</div>
);
}