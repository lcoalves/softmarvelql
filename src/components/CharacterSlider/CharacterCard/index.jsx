import React from 'react';
import { useHistory } from 'react-router-dom';

import { useCharacter } from '../../../hooks/character';
import { Container, Thumbnail, Name } from './styles';

const CharacterCard = ({
  id,
  thumbnail,
  name,
  description,
  series,
  isActive,
}) => {
  const { setCharacter } = useCharacter();
  const history = useHistory();

  function handleSelectCharacter() {
    setCharacter({
      id,
      thumbnail,
      name,
      description,
      series,
    });
    history.push(`/character`);
  }

  return (
    <Container
      data-testid="characterCard"
      isActive={isActive}
      onClick={handleSelectCharacter}
    >
      <Thumbnail
        data-testid="characterCardImg"
        src={`${thumbnail.path}.${thumbnail.extension}`}
      />
      <Name data-testid="characterCardName">{name}</Name>
    </Container>
  );
};

export default CharacterCard;
