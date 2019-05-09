# React Scroll Shadow


## Installation

```
npm i react-scroll-shadow
// OR
yarn add react-scroll-shadow
```

## Demo

Local demo:

```
git clone https://github.com/andrelmlins/react-scroll-shadow.git
cd react-scroll-shadow/examples
yarn install && yarn start
```

## Examples

```jsx
import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ReactScrollShadow from 'react-scroll-shadow';

class App extends PureComponent {
  render() {
    return (
      <div>
        <ReactScrollShadow>
            Scroll
        </ReactScrollShadow>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
```
