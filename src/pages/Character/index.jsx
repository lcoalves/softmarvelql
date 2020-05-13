import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiEdit3, FiSave } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useCharacter } from '../../hooks/character';

import logo from '../../assets/logo.png';

import {
  Header,
  Container,
  TitleContainer,
  Title,
  TitleInput,
  Description,
  DescriptionInput,
  SeriesCount,
  SeriesList,
  SerieItem,
} from './styles';

const Character = () => {
  const [editing, setEditing] = useState(false);
  const [localCharacter, setLocalCharacter] = useState(null);

  const { character } = useCharacter();

  const handleChange = useCallback(
    (event) => {
      event.preventDefault();

      const { name, value } = event.target;

      setLocalCharacter({
        ...localCharacter,
        [`${name}`]: value,
      });
    },
    [localCharacter],
  );

  useEffect(() => {
    if (character) {
      setLocalCharacter(character);
    }
  }, [character]);

  return (
    localCharacter && (
      <>
        <Header>
          <img src={logo} width="150" alt="SoftMarvel" />
          <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </Header>

        <TitleContainer isEditing={editing}>
          {!editing ? (
            <Title>Character: {localCharacter.name}</Title>
          ) : (
            <TitleInput
              name="name"
              value={localCharacter.name}
              onChange={handleChange}
            />
          )}

          {!editing ? (
            <button type="button" onClick={() => setEditing(true)}>
              <FiEdit3 />
              edit
            </button>
          ) : (
            <button type="button" onClick={() => setEditing(false)}>
              <FiSave />
              save
            </button>
          )}
        </TitleContainer>

        {!editing ? (
          <Description>{localCharacter.description}</Description>
        ) : (
          <DescriptionInput
            name="description"
            value={localCharacter.description}
            onChange={handleChange}
          />
        )}
        <Container>
          <img
            src={`${localCharacter.thumbnail.path}.${localCharacter.thumbnail.extension}`}
            alt={localCharacter.name}
          />

          <div>
            <SeriesCount>
              Series ({localCharacter.series.available})
            </SeriesCount>
            <SeriesList>
              {localCharacter.series.items.length > 0 &&
                localCharacter.series.items.map((serie) => (
                  <SerieItem key={serie.name}>{serie.name}</SerieItem>
                ))}
            </SeriesList>
          </div>
        </Container>
      </>
    )
  );
};

export default Character;
