import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div className="flex border border-gray-300 text-gray-900 text-sm rounded-lg min-w-[15rem] p-1 bg-white">
      <div className="m-1">
        <SearchIcon width={15}></SearchIcon>
      </div>

      <input type="text" placeholder="поиск..." />
    </div>
  );
};

export default Search;
