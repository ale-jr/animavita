import { searchCharacters } from ".";
describe("characterService", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetchMock.resetMocks();
  });

  it("Should return right structure", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: [
          {
            id: "221",
            type: "characters",
            links: {
              self: "https://kitsu.io/api/edge/characters/221"
            },
            attributes: {
              createdAt: "2013-02-20T18:49:26.948Z",
              updatedAt: "2021-09-25T07:21:40.051Z",
              slug: "naruto-uzumaki",
              names: {
                en: "Naruto Uzumaki",
                ja_jp: "うずまき ナルト"
              },
              canonicalName: "Naruto Uzumaki",
              otherNames: ["Nine-Tails Jinchuuriki"],
              name: "Naruto Uzumaki",
              malId: 17,
              description: "Dummy description",
              image: {
                tiny:
                  "https://media.kitsu.io/character/221/image/tiny-c9becd30dfd801c663e18863b1f84dc2.jpeg",
                large:
                  "https://media.kitsu.io/character/221/image/large-c1fc8267b7061dfbef126d7f30110fe9.jpeg",
                small:
                  "https://media.kitsu.io/character/221/image/small-d08253fa9c4e213a9a85bed53ece1c60.jpeg",
                medium:
                  "https://media.kitsu.io/character/221/image/medium-53e3cf20ea4707fbc4894b2c54ab57ed.jpeg",
                original:
                  "https://media.kitsu.io/characters/images/221/original.jpg",
                meta: {
                  dimensions: {
                    tiny: {
                      width: 100,
                      height: 120
                    },
                    large: {
                      width: 500,
                      height: 600
                    },
                    small: {
                      width: 200,
                      height: 240
                    },
                    medium: {
                      width: 300,
                      height: 360
                    }
                  }
                }
              }
            },
            relationships: {
              primaryMedia: {
                links: {
                  self:
                    "https://kitsu.io/api/edge/characters/221/relationships/primary-media",
                  related:
                    "https://kitsu.io/api/edge/characters/221/primary-media"
                }
              },
              castings: {
                links: {
                  self:
                    "https://kitsu.io/api/edge/characters/221/relationships/castings",
                  related: "https://kitsu.io/api/edge/characters/221/castings"
                }
              },
              mediaCharacters: {
                links: {
                  self:
                    "https://kitsu.io/api/edge/characters/221/relationships/media-characters",
                  related:
                    "https://kitsu.io/api/edge/characters/221/media-characters"
                }
              },
              quotes: {
                links: {
                  self:
                    "https://kitsu.io/api/edge/characters/221/relationships/quotes",
                  related: "https://kitsu.io/api/edge/characters/221/quotes"
                }
              }
            }
          }
        ],
        meta: {
          count: 100
        }
      })
    );

    await searchCharacters("naruto").then(({ characters, pageCount }) => {
      expect(pageCount).toEqual(10);
      expect(characters).toHaveLength(1);
      expect(characters[0]).toEqual({
        id: "221",
        name: "Naruto Uzumaki",
        avatar:
          "https://media.kitsu.io/character/221/image/small-d08253fa9c4e213a9a85bed53ece1c60.jpeg",
        otherNames: ["Nine-Tails Jinchuuriki"],
        about: "Dummy description"
      });
    });
  });

  it("Should have right offset ant limit", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: [],
        meta: {
          count: 0
        }
      })
    );

    await searchCharacters("whatever", 3);

    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://kitsu.io/api/edge/characters?page%5Blimit%5D=10&page%5Boffset%5D=20&filter%5Bname%5D=whatever"
    );
  });
});
