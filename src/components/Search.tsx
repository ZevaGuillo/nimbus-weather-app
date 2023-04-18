import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        className="block w-full lg:w-50 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-light placeholder:text-gray-400 focus:right-2 focus:ring-inset sm:text-sm sm:leading-6"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
