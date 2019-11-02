import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #0097a7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Ul = styled.ul`
  list-style: none;
  border-radius: 2px;
  padding: 0px;
  margin: 0px;
`;

export const Li = styled.li`
  padding: 15px;
  color: #333;
`;

export const Card = styled.div`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 400px;
  max-width: 40%;
  background-color: white;
  max-height: 400px;
  &:first-child {
    margin-right: 30px;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin: 0px;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
  text-align: center;
`;

export const Badge = styled.a`
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;

export default {
  Container,
  Ul,
  Li,
  Card,
  Row,
  Title,
  Subtitle,
  Badge
};
