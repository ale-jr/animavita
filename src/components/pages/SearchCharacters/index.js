import propTypes from "prop-types";
import SearchInput from "../../organisms/SearchInput";
import PageWithAppBar from "../../templates/PageWithAppBar";
import CharacterList from "../../organisms/CharacterList";
import Button from "../../atoms/Button";
function SearchCharactersPage({
  loading,
  characters,
  error,
  onSearch,
  onNext,
  hasNextPage
}) {
  return (
    <PageWithAppBar title="AnimaVita">
      <SearchInput onSearch={onSearch} />
      <CharacterList loading={loading} error={error} characters={characters} />
      {hasNextPage &&
        <Button onClick={onNext}>Encontrar mais personagens</Button>}
    </PageWithAppBar>
  );
}

SearchCharactersPage.propTypes = {
  loading: propTypes.bool,
  characters: propTypes.array,
  error: propTypes.string,
  onSearch: propTypes.func,
  onNext: propTypes.func,
  hasNextPage: propTypes.bool
};

export default SearchCharactersPage;
