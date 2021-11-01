import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  { Name: 'Lucario', URL: 'https://upload.wikimedia.org/wikipedia/en/9/95/Pok%C3%A9mon_Lucario_art.png' },
  { Name: 'Burmy', URL: 'https://cdn2.bulbagarden.net/upload/thumb/c/c9/412Burmy-Plant.png/900px-412Burmy-Plant.png' },
  { Name: 'Luxray', URL: 'https://cdn2.bulbagarden.net/upload/a/a7/405Luxray.png' },
  { Name: 'Volcarona', URL: 'https://cdn2.bulbagarden.net/upload/6/6b/637Volcarona.png' },
  { Name: 'Flygon', URL: 'https://cdn2.bulbagarden.net/upload/f/f1/330Flygon.png' }
];

ReactDOM.render(
  <Carousel photos={images} />,
  document.getElementById('root')
);
