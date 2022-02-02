import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "../../molecules/TextInput";
import { SearchInputForm } from "./style";
import Button from "../../atoms/Button";

function SearchInput({ onSearch }) {
  const [value, setValue] = useState("");

  const handleInputChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <SearchInputForm onSubmit={handleSubmit}>
      <TextInput
        value={value}
        onChange={handleInputChange}
        label="Busque um personagem"
      />
      <Button type="submit">Buscar</Button>
    </SearchInputForm>
  );
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchInput;
