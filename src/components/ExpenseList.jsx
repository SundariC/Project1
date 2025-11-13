import React from "react";

export default function ExpenseList({ data, onDelete }) {
  return (
    <div className=" w-full bg-yellow-200 text-yellow-900 shadow-md shadow-yellow-600 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Recent Entries</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No entries yet.</p>
      ) : (
        <ul className="divide-y">
          {data.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>
                {item.category || item.source} - {item.note}
              </span>
              <span>₹{item.amount}</span>
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-300 text-black shadow-md shadow-red-600 p-2 rounded hover:bg-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
