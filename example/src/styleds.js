import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #0097a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  list-style: none;
  border-radius: 2px;
  padding: 0px;
  margin: 0px;
`;

export const Li = styled.li`
  border-botom: 1px solid #979797;
  padding: 15px;
`;

export const Card = styled.div`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  width: 300px;
  background-color: white;
  max-height: 400px;
  &:first-child {
    margin-right: 30px;
  }
`;

export default {
  Container,
  Ul,
  Li,
  Card
};
