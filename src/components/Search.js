import React from "react";

function Search({ onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
