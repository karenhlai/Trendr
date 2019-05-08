import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';

class CreateQuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({ [field]: e.target.value, });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* put a hidden input that submits text for every form? */}
          <label>Title</label>
          <input type="text" value={this.state.title} name="title" onChange={this.update("title")} placeholder={"Quote"} />

          <label>-</label>
          <input type="text" value={this.state.body} name="body" onChange={this.update("body")} placeholder={"Source"} />

          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  post: { content: "quote", title: "", body: "" }
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuoteForm);


