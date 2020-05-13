import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';

import CharacterSlider from '../../components/CharacterSlider';
import reducer, { INITIAL_STATE } from '../../store/ducks/character';

function renderWithRedux(
  ui,
  { /* initialState, */ store = createStore(reducer, INITIAL_STATE) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('<CharacterSlider/>', () => {
  afterEach(cleanup);
  test('should be possible to render a grid of characters cards', () => {
    const character = {
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
        ],
        returned: 2,
      },
    };

    const history = createMemoryHistory();
    const { getAllByTestId } = renderWithRedux(
      <Router history={history}>
        <CharacterSlider characters={[character]} />
      </Router>,
    );

    const characters = getAllByTestId('characterCard');

    expect(characters).toBeDefined();
    expect(characters[0].textContent).toEqual('A-Bomb (HAS)');
  });
});
