import { React } from "react";
import "../css/SearchBar.css";

function SearchBar({
  onSearch,
  searchInput,
  setSearchInput,
  isInputValid,
  onInputChange,
}) {
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    onInputChange(input);
  };

  const handleSearchClick = () => {
    onSearch(searchInput);
  };
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Please input a city"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
      {isInputValid === "false" && (
        <p style={{ color: "red" }}>Invalid city name. Please try again.</p>
      )}
    </div>
  );
}

export default SearchBar;
