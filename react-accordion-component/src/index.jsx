import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  { Name: 'First', Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus neque, porta quis lectus id, fringilla dictum risus. Aenean malesuada eros dignissim molestie convallis.' },
  { Name: 'Second', Desc: 'Maecenas eget dictum nulla, vel finibus arcu. Aliquam volutpat eros sapien, at cursus nulla suscipit malesuada.' },
  { Name: 'Third', Desc: 'Mauris molestie, tellus sit amet sodales molestie, mauris ipsum pellentesque quam, ut consectetur mauris elit eu nisi. Vivamus dignissim lacus id dolor tincidunt, sed consectetur nibh interdum.' }
];

ReactDOM.render(
  < Accordion topics={topics}/>,
  document.getElementById('root')
);
