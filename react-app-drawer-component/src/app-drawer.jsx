import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      menu: false
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.menu) {
      this.setState({ menu: false });
    } else {
      this.setState({ menu: true });
    }
  }

  render() {
    let hidden = '';
    let hidden2 = '';
    let shade = '';
    if (this.state.menu) {
      hidden2 = 'navBar';
      hidden = 'fas fa-bars menuBttn hidden';
      shade = 'shade';
    } else {
      hidden = 'fas fa-bars menuBttn';
      hidden2 = 'navBar hidden';
      shade = '';
    }
    return <div>
        <i onClick={this.handleClick} className={hidden}></i>
        <nav className={hidden2}>
        <h1>Menu</h1>
        <h3 onClick={this.handleClick}>Words</h3>
        <h3 onClick={this.handleClick}>More Words</h3>
        <h3 onClick={this.handleClick}>Even More Words</h3>
      </nav>
      <div className={shade} onClick={this.handleClick}></div>
      </div>;
  }
}
