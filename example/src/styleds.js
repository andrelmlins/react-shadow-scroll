import styled from 'styled-components';

export const Body = styled.main`
  width: 100%;
  height: 100%;
  backgroundcolor: #0097a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  list-style: none;
  border: 1px solid #979797;
  border-radius: 2px;
`;

export const Li = styled.li`
  border-botom: 1px solid #979797;
`;

export const Card = styled.div`
  box-shadow: none;
`;

export default {
  Body,
  Ul,
  Li,
  Card
};
