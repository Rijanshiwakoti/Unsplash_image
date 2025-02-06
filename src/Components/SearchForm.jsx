import React from "react";
import { useGlobalContext } from "./contect";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const onSearch = (e) => {
    setSearchValue(e.target[0].value);
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="title">Unsplash Image</h2>
      <form className="search-form" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="cat"
          name="search"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
