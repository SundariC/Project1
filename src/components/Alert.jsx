import React from "react";

export default function Alert({ type = "success", message }) {
  return (
    <div
      className={`p-3 mb-3 rounded-lg text-white text-sm shadow-md transition-all ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : "bg-blue-500"
      }`}
    >
      {message}
    </div>
  );
}
