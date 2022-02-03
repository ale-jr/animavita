import { useEffect, useRef, useState } from "react";
import { searchCharacters } from "../../services/characterService";

const useCharacterSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [characters, setCharacters] = useState([]);
  const characterSearchRef = useRef("");
  const [page, setPage] = useState({
    current: 1,
    count: 0
  });

  const search = (characterName, page = 1) => {
    const isNewSearch = page <= 1;
    if (isNewSearch) {
      characterSearchRef.current = characterName;
      setCharacters([]);
    }

    setLoading(true);
    searchCharacters(characterName, page)
      .then(({ characters, pageCount }) => {
        if (isNewSearch) {
          setCharacters(characters);
        } else {
          setCharacters(currentCharacters => [
            ...currentCharacters,
            ...characters
          ]);
        }

        setPage({
          current: page,
          count: pageCount
        });
      })
      .catch(() => {
        //TODO: improve error handling!
        setError("Ocorreu um erro, tente novamente");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getNextPage = () => {
    const nextPage = page.current + 1;
    if (nextPage > page.count) return;
    search(characterSearchRef.current, nextPage);
  };

  useEffect(() => {
    search();
  }, []);
  return {
    loading,
    error,
    characters,
    hasNextPage: page.current < page.count,
    search,
    getNextPage
  };
};

export default useCharacterSearch;
