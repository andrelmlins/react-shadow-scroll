# React Scroll Shadow


## Installation

```
npm i react-shadow-scroll
// OR
yarn add react-shadow-scroll
```

## Demo

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
            Scroll
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