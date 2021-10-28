import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ current: null });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    if (this.state.current === key) {
      this.setState({ current: null });
    } else {
      this.setState({ current: key });
    }
  }

  handleClass(key) {
    let description = 'hidden';
    if (this.state.current === key) {
      description = 'desc';
    } else {
      description = 'hidden';
    }
    return description;
  }

  render() {
    const topicList = this.props.topics.map((topics, index) => {
      return (
        <div className="container" key={index}>
          <div className="topic" onClick={() => this.handleClick(index)}>{topics.Name}</div>
          <div className={this.handleClass(index)}>{topics.Desc}</div>
        </div>
      );
    });
    return (<div>
      {topicList}
    </div>);
  }
}
