import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useCharacter } from '../../hooks/character';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import AlphabetNavigation from '../../components/AlphabetNavigation';
import CharacterSlider from '../../components/CharacterSlider';

import { Title, Form, Error } from './styles';

const Main = () => {
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');

  const { setCharacter } = useCharacter();

  const history = useHistory();

  const characters = useSelector((state) => state.character.characters);

  async function handleSearchCharacter(event) {
    event.preventDefault();

    if (!search) {
      setInputError('Digite o nome do personagem.');
    } else {
      try {
        const response = await api.get('/characters', {
          params: {
            name: search,
          },
        });

        if (response.data.data.results.length > 0) {
          const character = response.data.data.results[0];

          setCharacter(character);
          history.push(`/character`);
        } else {
          setInputError('Nenhum personagem foi encontrado.');
        }
      } catch (err) {
        setInputError('Erro ao buscar por esse personagem.');
      }
    }
  }

  return (
    <>
      <img src={logo} width="150" alt="SoftMarvel" />
      <Title>Explore os personagens da Marvel</Title>

      <Form onSubmit={handleSearchCharacter} hasError={!!inputError}>
        <input
          placeholder="Digite o nome de um personagem"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <CharacterSlider characters={characters} />
      <AlphabetNavigation />
    </>
  );
};

export default Main;
