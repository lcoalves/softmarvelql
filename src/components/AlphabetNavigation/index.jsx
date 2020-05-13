import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as CharacterActions } from '../../store/ducks/character';

import alphabet from '../../utils/alphabet';

import { Container, NavItem, NavLink } from './styles';

const AlphabetNavigation = () => {
  const letter = useSelector((state) => state.character.letter);

  const dispatch = useDispatch();

  const handleChangeLetter = useCallback(
    (newLetter) => {
      dispatch(CharacterActions.letterRequest(newLetter));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(CharacterActions.characterRequest(letter));
  }, [dispatch, letter]);

  return (
    <Container>
      {alphabet.map((alphabetLetter) => (
        <NavItem
          key={alphabetLetter}
          active={alphabetLetter === letter}
          onClick={() => handleChangeLetter(alphabetLetter)}
        >
          <NavLink href="#">{alphabetLetter}</NavLink>
        </NavItem>
      ))}
    </Container>
  );
};

export default AlphabetNavigation;
