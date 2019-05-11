import React from 'react';
import ReactShadowScroll from 'react-shadow-Scroll';

import { Container, Ul, Li, Card, Title, Row } from './styleds';

const App = () => {
  return (
    <Container>
      <Title>React Shadow Scroll</Title>
      <Row>
        <Card>
          <ReactShadowScroll scrollWidth={10} scrollPadding={5}>
            <Ul>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
              <Li>Test</Li>
            </Ul>
          </ReactShadowScroll>
        </Card>
        <Card style={{ overflowY: 'scroll' }}>
          <Ul>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
            <Li>Test</Li>
          </Ul>
        </Card>
      </Row>
    </Container>
  );
};

export default App;
