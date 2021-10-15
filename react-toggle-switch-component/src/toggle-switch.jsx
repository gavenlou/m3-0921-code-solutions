import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.on) {
      this.setState({ on: false });
    } else {
      this.setState({ on: true });
    }
  }

  render() {
    if (this.state.on) {
      return <div onClick={this.handleClick} className="on">
        <button> </button>
        <h1>On</h1>
        </div>;
    } else {
      return <div onClick={this.handleClick} className="off">
        <button> </button>
        <h1>Off</h1>
      </div>;
    }
  }
}
