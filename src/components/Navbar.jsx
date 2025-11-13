import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-t from-green-200 to-gray-500 text-white p-8 mb-4 shadow-lg shadow-gray-500">
      <ul className="flex gap-20 justify-center">
        <li>
          <Link
            to="/"
            className=" p-2 rounded-lg shadow-lg shadow-white hover:bg-blue-300 hover:text-black"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/income"
            className=" p-2 rounded-lg shadow-lg shadow-white hover:bg-green-300 hover:text-black"
          >
            Income
          </Link>
        </li>
        <li>
          <Link
            to="/expenses"
            className=" p-2 rounded-lg shadow-lg shadow-white hover:bg-orange-300 hover:text-black"
          >
            Expense
          </Link>
        </li>
        <li>
          <Link
            to="/charts"
            className=" p-2 rounded-lg shadow-lg shadow-white hover:bg-pink-300 hover:text-black"
          >
            Charts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
