// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import DashboardPage from './pages/DashboardPage';
// import ExpensePage from './pages/ExpensePage';
// import IncomePage from './pages/IncomePage';
// import ChartPage from './pages/ChartPage';


// export default function App() {
// return (
// <Router>
// <div className="min-h-screen bg-gray-100">
// <Navbar />
// <div className="p-4">
// <Routes>
// <Route path="/" element={<DashboardPage expenses={expenses}/>} />
// <Route path="/expenses" element={<ExpensePage expense={expenses} setExpense={setExpenses} />} />
// <Route path="/income" element={<IncomePage income={income} setIncome={setIncome} />} />
// <Route path="/charts" element={<ChartPage chart={chart} setChart={setChart} />} />
// </Routes>
// </div>
// </div>
// </Router>
// );
// }

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import ExpensePage from './pages/ExpensePage';
import IncomePage from './pages/IncomePage';
import ChartPage from './pages/ChartPage';

export default function App() {
  // ✅ Declare all your states here
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
//   const [chart, setChart] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={<DashboardPage expenses={expenses} income={income} />}
            />
            <Route
              path="/expenses"
              element={<ExpensePage expenses={expenses} setExpenses={setExpenses} />}
            />
            <Route
              path="/income"
              element={<IncomePage income={income} setIncome={setIncome} />}
            />
            <Route
              path="/charts"
              element={<ChartPage expenses={expenses} income={income} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
