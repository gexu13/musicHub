import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchInput({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      onSearch(searchInput);
    }
  }

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSearch() {
    onSearch(searchInput);
  }

  return (
    <InputGroup className="mb-3" size="lg">
      <FormControl
        placeholder="search for artist"
        type="input"
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </InputGroup>
  );
}

export default SearchInput;
