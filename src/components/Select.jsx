import React from "react";

const Select = ({ label, v, defv }) => {
  return (
    <div>
      <label
        for="select"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="select"
        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue={"Choose"}>{defv}</option>
        {v.map((values) => {
          return (
            <option key={values.id} value={values.value}>
              {values.znach}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
