import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="col-sm-6 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by First Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Make sure setSearch is correctly received as a prop
      />
    </div>
  );
};

export default Search;
