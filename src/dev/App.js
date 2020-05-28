import React from 'react';
import ReactShadowScroll from '../lib';

import {
  Container,
  Ul,
  Li,
  Card,
  Title,
  Subtitle,
  Row,
  RowBadge
} from './styleds';
import Badge from './Badge';

import cars from './cars';

const App = () => (
  <Container>
    <Title>React Shadow Scroll</Title>
    <RowBadge>
      <Badge
        url="https://www.npmjs.com/package/react-shadow-scroll"
        image="https://badge.fury.io/js/react-shadow-scroll.svg"
        text="npm version"
      />
      <Badge
        url="https://github.com/andrelmlins/react-shadow-scroll/blob/master/LICENSE"
        image="https://img.shields.io/badge/License-MIT-yellow.svg"
        text="License: MIT"
      />
      <Badge
        url="https://travis-ci.com/andrelmlins/react-shadow-scroll"
        image="https://travis-ci.com/andrelmlins/react-shadow-scroll.svg?branch=master"
        text="Build Status"
      />
      <Badge
        url="https://david-dm.org/andrelmlins/react-shadow-scroll"
        image="https://david-dm.org/andrelmlins/react-shadow-scroll.svg"
        text="Dependencies"
      />
      <Badge
        url="https://lgtm.com/projects/g/andrelmlins/react-shadow-scroll/context:javascript"
        image="https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/react-shadow-scroll.svg?logo=lgtm&logoWidth=18"
        text="Language grade: JavaScript"
      />
    </RowBadge>
    <Row>
      <Card>
        <Subtitle>With ReactShadowScroll</Subtitle>
        <ReactShadowScroll isShadow={true} scrollWidth={10} scrollPadding={5}>
          <Ul>
            {cars.map(item => (
              <Li key={item}>{item}</Li>
            ))}
          </Ul>
        </ReactShadowScroll>
      </Card>
      <Card>
        <Subtitle>Without ReactShadowScroll</Subtitle>
        <Ul style={{ overflowY: 'scroll' }}>
          {cars.map(item => (
            <Li key={item}>{item}</Li>
          ))}
        </Ul>
      </Card>
    </Row>
  </Container>
);

export default App;
