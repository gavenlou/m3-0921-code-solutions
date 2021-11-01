import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ IMG: 0 });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dir) {
    if (dir === 'left') {
      if (this.state.IMG === 0) {
        this.setState({
          IMG: 4
        });
      } else {
        this.setState(state => ({
          IMG: state.IMG - 1
        }));
      }
    } else if (dir === 'right') {
      if (this.state.IMG === 4) {
        this.setState({
          IMG: 0
        });
      } else {
        this.setState(state => ({
          IMG: state.IMG + 1
        }));
      }
    } else {
      this.setState({
        IMG: dir
      });
    }
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  ComponentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.IMG >= 4) {
      this.setState({
        IMG: 0
      });
    } else if (this.state.IMG < 0) {
      this.setState({
        IMG: 4
      });
    } else {
      const count = this.state.IMG + 1;
      this.setState({
        IMG: count
      });
    }
  }

  dotClass(num) {
    if (num === this.state.IMG) return 'fas fa-circle';
    else return 'far fa-circle';
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <i onClick={() => this.handleClick('left')} className="fas fa-chevron-left"></i>
        </div>
        <div className="middle">
          <div className="image">
            <img src={this.props.photos[this.state.IMG].URL}></img>
          </div>
          <div className="dots">
            <i onClick={() => this.handleClick(0)} className={this.dotClass(0)}></i>
            <i onClick={() => this.handleClick(1)} className={this.dotClass(1)}></i>
            <i onClick={() => this.handleClick(2)} className={this.dotClass(2)}></i>
            <i onClick={() => this.handleClick(3)} className={this.dotClass(3)}></i>
            <i onClick={() => this.handleClick(4)} className={this.dotClass(4)}></i>
          </div>
        </div>
        <div className="right">
          <i onClick={() => this.handleClick('right')} className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
