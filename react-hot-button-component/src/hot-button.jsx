import React from 'react';

export default class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let count = this.state.clicks;
    count++;
    this.setState({ clicks: count });
  }

  render() {
    let bttnClass = '';

    if (this.state.clicks < 3) {
      bttnClass = 'cold';
    } else if (this.state.clicks < 6) {
      bttnClass = 'chilly';
    } else if (this.state.clicks < 9) {
      bttnClass = 'lukewarm';
    } else if (this.state.clicks < 12) {
      bttnClass = 'warm';
    } else if (this.state.clicks < 15) {
      bttnClass = 'hot';
    } else if (this.state.clicks < 18) {
      bttnClass = 'hotter';
    } else {
      bttnClass = 'hottest';
    }
    return <button className={bttnClass} onClick={this.handleClick}> Hot Button </button>;
  }
}
