import SearchCharactersPage from "../../components/pages/SearchCharacters";
import useCharacterSearch from "../../hooks/useCharacterSearch";

function SearchCharactersContainer() {
  const {
    characters,
    error,
    getNextPage,
    loading,
    hasNextPage,
    search
  } = useCharacterSearch();
  return (
    <SearchCharactersPage
      characters={characters}
      error={error}
      loading={loading}
      onSearch={search}
      hasNextPage={hasNextPage}
      onNext={getNextPage}
    />
  );
}

export default SearchCharactersContainer;
