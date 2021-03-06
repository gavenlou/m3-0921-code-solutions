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
          IMG: this.props.photos.length - 1
        });
      } else {
        this.setState(state => ({
          IMG: state.IMG - 1
        }));
      }
    } else if (dir === 'right') {
      if (this.state.IMG === this.props.photos.length - 1) {
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
      () => this.handleClick('right'),
      3000
    );
  }

  ComponentWillUnMount() {
    clearInterval(this.timerID);
  }

  dotClass(num) {
    if (num === this.state.IMG) return 'fas fa-circle';
    else return 'far fa-circle';
  }

  render() {
    const autoDots = this.props.photos.map((photo, index) => {
      return (
        <i key="photo.Name"onClick={() => this.handleClick(index)} className={this.dotClass(index)}></i>
      );
    });
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
            {autoDots}
          </div>
        </div>
        <div className="right">
          <i onClick={() => this.handleClick('right')} className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
