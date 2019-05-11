import React from 'react';
import ReactScrollShadow from 'react-scroll-shadow';

import { Container, Ul, Li, Card } from './styleds';

const App = () => {
  return (
    <Container>
      <Card>
        <ReactScrollShadow>
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
        </ReactScrollShadow>
      </Card>
      <Card>Scroll</Card>
    </Container>
  );
};

export default App;
