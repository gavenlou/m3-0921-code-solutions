import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ current: 'none' });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(topic) {
    if (this.state.current !== topic || this.state.current === null) {
      this.setState({ current: topic });
    } else {
      this.setState({ current: null });
    }
  }

  render() {
    const topicList = this.props.topics.map(topics => {
      return (
        <div className="container" key={topics.Name}>
          <div className="topic" onClick={ () => this.handleClick(topics.Name)}>{topics.Name}</div>
          <div className="desc hidden">{topics.Desc}</div>
        </div>
      );
    });
    return (<div>
      {topicList}
    </div>);
  }
}
