import React from 'react';
import ReactScrollShadow from 'react-scroll-shadow';

import { Container, Ul, Li, Card } from './styleds';

const App = () => {
  return (
    <Container>
      <Card>
        <ReactScrollShadow scrollWidth={10} scrollPadding={5}>
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
    </Container>
  );
};

export default App;
