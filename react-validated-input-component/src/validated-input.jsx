import React from 'react';

export default class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      valid: false,
      error: ''
    });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const value = event.target.value;
    if (value === '') {
      this.setState({
        valid: false,
        error: 'A password is required.'
      });
    } else if (value.length < 8) {
      this.setState({
        valid: false,
        error: 'Your password is too short.'
      });
    } else {
      this.setState({
        valid: true,
        error: ''
      });
    }
  }

  render() {
    let passed = '';
    let error = '';
    if (this.state.valid) {
      passed = 'fas fa-check green';
      error = '';
    } else {
      passed = 'fas fa-times red';
      error = this.state.error;
    }
    return (
      <div className="container">
        <h3>Password</h3>
        <input type="text" onChange={this.handleChange}></input> <span className={passed}></span>
        <h5 className="red">{error}</h5>
      </div>
    );
  }
}
