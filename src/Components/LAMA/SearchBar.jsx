import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
        placeholder="Cari pendaftar..."
      />
    </div>
  );
};

export default SearchBar;
