import SearchInput from "../../organisms/SearchInput";
import PageWithAppBar from "../../templates/PageWithAppBar";

function SearchCharactersPage() {
  return (
    <PageWithAppBar title="AnimeVita">
      <SearchInput onSearch={value => console.log("submit", value)} />
    </PageWithAppBar>
  );
}

export default SearchCharactersPage;
