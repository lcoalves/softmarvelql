import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 90%;
  height: 200px;
  background: #fff;
  border-radius: 5px;
  -moz-border-radius: 5px;
  transition: all 0.2s;

  cursor: pointer;
`;

export const Thumbnail = styled.div`
  border-radius: 5px 5px 0 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100%;
  height: 160px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px;
  text-align: center;
  font-weight: 700;
  color: #3a3a3a;
`;
