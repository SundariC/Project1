import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">💰 Finance Tracker</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-yellow-400">Dashboard</Link></li>
        <li><Link to="/income" className="hover:text-yellow-400">Income</Link></li>
        <li><Link to="/expense" className="hover:text-yellow-400">Expense</Link></li>
        <li><Link to="/chart" className="hover:text-yellow-400">Chart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
