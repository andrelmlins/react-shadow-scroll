# React Shadow Scroll [![npm version](https://badge.fury.io/js/react-shadow-scroll.svg)](https://badge.fury.io/js/react-shadow-scroll) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-shadow-scroll/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-shadow-scroll.svg?branch=master)](https://travis-ci.com/andrelmlins/react-shadow-scroll) &bull; [![Dependencies](https://david-dm.org/andrelmlins/react-shadow-scroll.svg)](https://david-dm.org/andrelmlins/react-shadow-scroll) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/6061e313-a774-4951-b9da-3c11bc5040e8/deploy-status)](https://app.netlify.com/sites/react-shadow-scroll/deploys)

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
cd react-shadow-scroll/example
yarn install && yarn start
```

## Examples

```jsx
import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ReactShadowScroll from 'react-shadow-scroll';

class App extends PureComponent {
  render() {
    return (
      <div>
        <ReactShadowScroll>
          <ul>
            <li></li>
          </ul>
        </ReactShadowScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
```

## Properties

Raw component props (before transform):

| Prop  | Default  | Type  | Description  |
|---|---|---|---|
| scrollColor | #c5c5c5 | string | Scroll color |
| scrollColorHover | #a6a6a6 | string | Scroll color when hover |
| scrollWidth | 5 | number | Scroll Width |
| scrollPadding | 0 | number | Left scroll padding |
| isShadow | true | boolean | View shadow |