import { React } from "react";
import "../css/SearchBar.css";

function SearchBar(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(props.searchInput);
  };
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Please input a city"
        value={props.searchInput}
        onChange={(e) => props.setSearchInput(e.target.value)}
      />
      <button className="search-button" onClick={handleSubmit}>
        Search
      </button>
      {props.isInputValid === "false" && (
        <p style={{ color: "red" }}>Invalid city name. Please try again.</p>
      )}
    </div>
  );
}

export default SearchBar;
