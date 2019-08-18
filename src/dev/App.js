import React from 'react';
import ReactShadowScroll from '../lib';

import { Container, Ul, Li, Card, Title, Subtitle, Row } from './styleds';

import cars from './cars';

const App = () => {
  return (
    <Container>
      <Title>React Shadow Scroll</Title>
      <p style={{ color: 'white' }}>
        <a href="https://www.npmjs.com/package/react-shadow-scroll">
          <img
            src="https://badge.fury.io/js/react-shadow-scroll.svg"
            alt="npm version"
          />
        </a>{' '}
        &bull;{' '}
        <a href="https://github.com/andrelmlins/react-shadow-scroll/blob/master/LICENSE">
          <img
            src="https://img.shields.io/badge/License-MIT-yellow.svg"
            alt="License: MIT"
          />
        </a>{' '}
        &bull;{' '}
        <a href="https://travis-ci.com/andrelmlins/react-shadow-scroll">
          <img
            src="https://travis-ci.com/andrelmlins/react-shadow-scroll.svg?branch=master"
            alt="Build Status"
          />
        </a>{' '}
        &bull;{' '}
        <a href="https://david-dm.org/andrelmlins/react-shadow-scroll">
          <img
            src="https://david-dm.org/andrelmlins/react-shadow-scroll.svg"
            alt="Dependencies"
          />
        </a>{' '}
        &bull;{' '}
        <a href="https://app.netlify.com/sites/react-shadow-scroll/deploys">
          <img
            src="https://api.netlify.com/api/v1/badges/6061e313-a774-4951-b9da-3c11bc5040e8/deploy-status"
            alt="Netlify Status"
          />
        </a>
      </p>
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
};

export default App;
