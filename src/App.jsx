import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import ChartPage from "./pages/ChartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
