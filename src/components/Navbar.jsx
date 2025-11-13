import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="bg-blue-600 text-white p-4 shadow-md">
<ul className="flex gap-6 justify-center">
<li><Link to="/">Dashboard</Link></li>
<li><Link to="/income">Income</Link></li>
<li><Link to="/expenses">Expense</Link></li>
<li><Link to="/charts">Charts</Link></li>
</ul>
</nav>
);
}