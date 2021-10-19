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
    let switchClass = 'off';
    let switchText = 'Off';

    if (this.state.on) {
      switchClass = 'on';
      switchText = 'On';
    }

    return <div onClick={this.handleClick} className={switchClass}>
        <button> </button>
        <h1>{switchText}</h1>
      </div>;
  }
}
