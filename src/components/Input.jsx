import React from "react";

export const Input = ({ label, children, type, width }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        placeholder={children}
        className={`${width} border border-gray-300 text-gray-900 text-sm rounded-sm block p-2.5`}
      ></input>
    </div>
  );
};
