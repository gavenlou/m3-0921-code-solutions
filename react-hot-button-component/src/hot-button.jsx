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
    if (this.state.clicks < 3) {
      return <button className="cold" onClick={this.handleClick}> Hot Button </button>;
    } else if (this.state.clicks < 6) {
      return <button className="chilly" onClick={this.handleClick}> Hot Button </button>;
    } else if (this.state.clicks < 9) {
      return <button className="lukewarm" onClick={this.handleClick}> Hot Button </button>;
    } else if (this.state.clicks < 12) {
      return <button className="warm" onClick={this.handleClick}> Hot Button </button>;
    } else if (this.state.clicks < 15) {
      return <button className="hot" onClick={this.handleClick}> Hot Button </button>;
    } else if (this.state.clicks < 18) {
      return <button className="hotter" onClick={this.handleClick}> Hot Button </button>;
    } else {
      return <button className="hottest" onClick={this.handleClick}> Hot Button </button>;
    }
  }
}
