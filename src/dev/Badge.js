import React from 'react';
import { Badge } from './styleds';

const App = ({ url, image, text }) => (
  <Badge href={url}>
    <img src={image} alt={text} />
  </Badge>
);

export default App;
