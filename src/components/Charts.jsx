import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);


export default function Charts({ incomeData, expenseData }) {
const categoryTotals = expenseData.reduce((acc, e) => {
acc[e.category] = (acc[e.category] || 0) + e.amount;
return acc;
}, {});


const doughnutData = {
labels: Object.keys(categoryTotals),
datasets: [{ data: Object.values(categoryTotals), backgroundColor: ['#36A2EB','#FF6384','#FFCE56','#4BC0C0','#9966FF'] }]
};


const barData = {
labels: ['Income', 'Expense'],
datasets: [{ label: 'Amount', data: [
incomeData.reduce((a,b)=>a+b.amount,0),
expenseData.reduce((a,b)=>a+b.amount,0)
], backgroundColor: ['#16a34a','#dc2626'] }]
};


return (
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-4 rounded-lg shadow-md"><Doughnut data={doughnutData} /></div>
<div className="bg-white p-4 rounded-lg shadow-md"><Bar data={barData} /></div>
</div>
);
}