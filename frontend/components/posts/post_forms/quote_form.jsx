import React from 'react';
import withRouter from 'react-router';

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.post;
    this.state = { content: "quote", title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value, });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(this.props.closeModal);
  }

  render() {
    return (
      <div>
        <div className="form-author">{this.props.currentUser.username}</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} name="title" onChange={this.update("title")} placeholder={"Quote"} />
          <input type="text" value={this.state.body} name="body" onChange={this.update("body")} placeholder={"Source"} />
          <input type="submit" value="Post" />
          <button onClick={() => this.props.closeModal()}>Close</button>
        </form>
      </div>
    )
  }
};

export default QuoteForm;
