import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';


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

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    post: { content: "quote", title: "", body: "" }, 
    formType: "Create Quote",
  })
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)), 
  otherForm: (
    <button onClick={() => dispatch(openModal('Create Quote'))}>
    Quote</button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);


