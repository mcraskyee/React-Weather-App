import { React } from "react";
import "../css/SearchBar.css";

function SearchBar({ onSearch, searchInput, setSearchInput, isInputValid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Please input a city"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="search-button" onClick={handleSubmit}>
        Search
      </button>
      {isInputValid === "false" && (
        <p style={{ color: "red" }}>Invalid city name. Please try again.</p>
      )}
    </div>
  );
}

export default SearchBar;
