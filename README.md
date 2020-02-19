# React Shadow Scroll

[![npm version](https://badge.fury.io/js/react-shadow-scroll.svg)](https://www.npmjs.com/package/react-shadow-scroll) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-shadow-scroll/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-shadow-scroll.svg?branch=master)](https://travis-ci.com/andrelmlins/react-shadow-scroll) &bull; [![Dependencies](https://david-dm.org/andrelmlins/react-shadow-scroll.svg)](https://david-dm.org/andrelmlins/react-shadow-scroll) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/6061e313-a774-4951-b9da-3c11bc5040e8/deploy-status)](https://app.netlify.com/sites/react-shadow-scroll/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/react-shadow-scroll.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/react-shadow-scroll/context:javascript)

Component that customizes the image and inserts shadow when scrolling exists

## Installation

```
npm i react-shadow-scroll
// OR
yarn add react-shadow-scroll
```

## Demo [Link](https://react-shadow-scroll.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/react-shadow-scroll.git
cd react-shadow-scroll
yarn install && yarn start
```

## Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import ReactShadowScroll from 'react-shadow-scroll';

const App = () => (
  <ReactShadowScroll>
    <ul>
      <li>Teste</li>
      <li>Teste</li>
      <li>Teste</li>
      <li>Teste</li>
    </ul>
  </ReactShadowScroll>
);

render(<App />, document.getElementById('root'));
```

## Properties

Raw component props (before transform):

| Prop              | Default                                                                   | Type    | Description             |
| ----------------- | ------------------------------------------------------------------------- | ------- | ----------------------- |
| scrollColor       | #c5c5c5                                                                   | string  | Scroll color            |
| scrollColorHover  | #a6a6a6                                                                   | string  | Scroll color when hover |
| scrollWidth       | 5                                                                         | number  | Scroll Width            |
| scrollPadding     | 0                                                                         | number  | Left scroll padding     |
| isShadow          | true                                                                      | boolean | View shadow             |
| shadow            | '0 2px 4px rgba(0, 0, 0, 0.2) inset, 0 -2px 4px rgba(0, 0, 0, 0.2) inset' | string  | Shadow                  |
| styleSubcontainer | null                                                                      | object  | Style in Subcontainer   |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/react-shadow-scroll.png)](https://nodei.co/npm/react-shadow-scroll/)

## License

React Shadow Scroll is open source software [licensed as MIT](https://github.com/andrelmlins/react-shadow-scroll/blob/master/LICENSE).
