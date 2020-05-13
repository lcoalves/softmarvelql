import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import CharacterCard from './CharacterCard';

import { Container } from './styles';

const CharacterSlider = ({ characters }) => {
  return (
    <Container>
      <Carousel
        centered
        infinite
        arrows
        slidesPerPage={5}
        keepDirectionWhenDragging
        arrowLeft={<FaAngleDoubleLeft />}
        arrowLeftDisabled={<FaAngleLeft />}
        arrowRight={<FaAngleDoubleRight />}
        arrowRightDisabled={<FaAngleRight />}
        addArrowClickHandler
        breakpoints={{
          640: {
            slidesPerPage: 1,
            arrows: false,
          },
          900: {
            slidesPerPage: 2,
            arrows: false,
          },
          1024: {
            slidesPerPage: 3,
            arrows: false,
          },
        }}
      >
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              thumbnail={character.thumbnail}
              name={character.name}
              description={character.description}
              series={character.series}
            />
          ))}
      </Carousel>
    </Container>
  );
};

export default CharacterSlider;
