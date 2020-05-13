import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  img {
    width: 400px;
    border-radius: 5px;
  }

  div {
    overflow-y: scroll;
    max-height: 400px;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      margin-left: 20px;
    }

    ::-webkit-scrollbar-button {
      width: 20px;
      height: 20px;
    }

    ::-webkit-scrollbar-thumb {
      background: #656565;
      border: 0px none #ffffff;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }

    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }

    ::-webkit-scrollbar-track {
      background: #cdcdcd;
      border: 0px none #ffffff;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }

    ::-webkit-scrollbar-track:active {
      background: #333333;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 300px;
    }

    div {
      margin-top: 40px;
      width: 100%;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 56px;

  margin-top: 40px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    width: 60px;
    height: 25px;

    border: none;
    border-radius: 5px;
    background: #e5e5ea;
    transition: background 0.2s;

    svg {
      margin-right: 4px;
    }

    &:hover {
      background: ${shade(0.2, '#e5e5ea')};
    }

    ${(props) =>
      props.isEditing &&
      css`
        background: #9cd98b;
        color: #fff;

        &:hover {
          background: ${shade(0.2, '#9cd98b')};
        }
      `}
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  color: #3a3a3a;
`;

export const TitleInput = styled.input`
  flex: 1;

  border: none;
  border-radius: 5px;
  padding: 8px;
  font-size: 34px;
  color: #3a3a3a;
`;

export const Description = styled.p`
  color: #3a3a3a;
  font-size: 18px;
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  height: 100px;
  max-width: 100%;
  min-width: 100%;
  max-height: 200px;
  min-height: 100px;
  margin-top: 8px;

  border: none;
  border-radius: 5px;
  padding: 8px;
  color: #3a3a3a;
  font-size: 18px;
`;

export const SeriesCount = styled.h2``;

export const SeriesList = styled.ul`
  margin-top: 8px;
  margin-right: 8px;
`;

export const SerieItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;
  width: 450px;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  margin-top: 8px;

  font-size: 18px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
