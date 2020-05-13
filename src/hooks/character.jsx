import React, { createContext, useCallback, useState, useContext } from 'react';

const CharacterContext = createContext({});

const CharacterProvider = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: 1011334,
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
      extension: 'jpg',
    },
    series: {
      available: 2,
      collectionURI:
        'http://gateway.marvel.com/v1/public/characters/1017100/series',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
          name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)2',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)3',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)4',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)5',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)6',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)7',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)8',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)9',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)0',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
          name: 'Hulk (2008 - 2012)00',
        },
      ],
      returned: 2,
    },
  });

  const setCharacter = useCallback(
    ({ id, thumbnail, name, description, series }) => {
      setSelectedCharacter({
        id,
        thumbnail,
        name,
        description,
        series,
      });
    },
    [],
  );

  return (
    <CharacterContext.Provider
      value={{ character: selectedCharacter, setCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

function useCharacter() {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider.');
  }

  return context;
}

export { CharacterProvider, useCharacter };
