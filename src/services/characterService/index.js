const OFFSET = 10;
export const searchCharacters = (characterName, page = 1) => {
  const url = new URL("https://kitsu.io/api/edge/characters");
  url.searchParams.append("page[limit]", OFFSET);
  url.searchParams.append("page[offset]", (page - 1) * OFFSET);

  if (characterName) url.searchParams.append("filter[name]", characterName);

  return fetch(url.toString())
    .then(response => {
      if (!response.ok)
        return Promise.reject({
          response
        });
      return response.json();
    })
    .then(body => {
      const characters = body.data.map(({ id, attributes }) => ({
        id,
        name: attributes.name,
        avatar: attributes.image?.small || '/assets/image_not_found.png',
        otherNames: attributes.otherNames,
        about: attributes.description
      }));

      const pageCount = Math.ceil(body.meta.count / OFFSET);

      return { characters, pageCount };
    });
};
