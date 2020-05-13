import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as CharacterActions } from '../../store/ducks/character';

import alphabet from '../../utils/alphabet';

import { Container, NavItem, NavLink } from './styles';

const AlphabetNavigation = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const dispatch = useDispatch();

  const handleChangeLetter = useCallback(
    (letter) => {
      setSelectedLetter(letter);
      dispatch(CharacterActions.characterRequest(letter));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(CharacterActions.characterRequest('A'));
  }, [dispatch]);

  return (
    <Container>
      {alphabet.map((letter) => (
        <NavItem
          key={letter}
          active={letter === selectedLetter}
          onClick={() => handleChangeLetter(letter)}
        >
          <NavLink href="#">{letter}</NavLink>
        </NavItem>
      ))}
    </Container>
  );
};

export default AlphabetNavigation;
