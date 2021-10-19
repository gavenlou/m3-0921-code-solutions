import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ email: null });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ email: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('e-mail:', this.state);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Email:
      <input type="text" value={this.state.email} onChange={this.handleChange} placeholder="Enter e-mail here"/>
      </label>
      <input type="submit"/>
    </form>;
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
