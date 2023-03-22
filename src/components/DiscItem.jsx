import React from "react";

const DiscItem = ({ name, person, group, description, date }) => {
  return (
    <div className="grid grid-cols-6 grid-rows-6 w-450 h-200 p-3 rounded-xl shadow-xl bg-white">
      <div className="grid col-start-1 col-end-5 row-start-1 row-end-3">
        {name}
      </div>
      <div className="grid text-gray-400 justify-center col-start-1 col-end-5 row-start-3 row-end-4 ">
        {person} {group}
      </div>
      <div className="grid justify-center col-start-1 col-end-7 row-start-4 row-end-7">
        {description}
      </div>
      <div className="grid justify-center content-center col-start-5 col-end-7 row-start-1 row-end-3 bg-indigo-800 rounded-xl mt-2 text-white">
        {date}
      </div>
    </div>
  );
};

export default DiscItem;
