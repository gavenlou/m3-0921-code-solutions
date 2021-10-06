import React from 'react';
import ReactDOM from 'react-dom';

const ReactEle = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);
// eslint-disable-next-line no-console
console.log(ReactEle);

ReactDOM.render(ReactEle, document.getElementById('root'));
