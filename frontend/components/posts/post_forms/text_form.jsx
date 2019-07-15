import React from 'react';
import withRouter from 'react-router';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// handleChange(e) {
//   this.setState({
//     [e.target.name] : e.target.value
//   });
// }

  update(field) {
    return e => this.setState({ [field]: e.target.value, });
  };

  
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal);
  }

  render () {
    return (
      <div>
        <div className="form-author">{this.props.currentUser.username}</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} name="title" onChange={this.update("title")} placeholder="Title" />
          <input type="text" value={this.state.body} name="body" onChange={this.update("body")} placeholder="Your Text Here" />
          <input type="submit" value="Create Post" />
          <button onClick={() => this.props.closeModal()}>Close</button>
        </form>
      </div>
    )
  }
};

export default TextForm;


